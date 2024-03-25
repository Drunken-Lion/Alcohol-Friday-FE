import serverInstance from 'app/_service/axios-server';
import { NextAuthOptions } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import KakaoProvider from 'next-auth/providers/kakao';

const reissueToken = async (token: JWT) => {
  console.log('reissueToken refreshToken: ' + token.refreshToken);

  try {
    const res = await serverInstance.post('/v1/auth/reissue-token', token.refreshToken, {
      headers: { 'Content-Type': 'text/plain' },
    });

    return {
      // ...token,
      accessToken: res.data.accessToken,
      accessTokenExp: res.data.accessTokenExp,
      refreshToken: res.data.refreshToken,
      member: token.member,
    };
  } catch (error) {
    console.log(error);
    return token;
  }
};

export const authOptions: NextAuthOptions = {
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: '/auth/login',
    signOut: '/auth/logout',
  },
  callbacks: {
    async signIn({ account }) {
      const url = `/v1/auth/login/${account?.provider}`;
      const token = account?.access_token;
      // const url = '/v1/auth/test';
      // const token = 'member3@af.shop';
      console.log('signIn token: ' + token);
      const res = await serverInstance.post(url, token, {
        headers: { 'Content-Type': 'text/plain' },
      });
      if (res.status !== 200) {
        return false;
      }

      const data = res.data;
      account!!.accessToken = data.jwtResponse.accessToken;
      account!!.refreshToken = data.jwtResponse.refreshToken;
      account!!.accessTokenExp = data.jwtResponse.accessTokenExp;
      account!!.memberResponse = data.memberResponse;

      return true;
    },
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account?.accessToken;
        token.accessTokenExp = account?.accessTokenExp;
        token.refreshToken = account?.refreshToken;
        token.member = account?.memberResponse;

        // return token;
      }

      /**
       * 리프레시 토큰 이용해서 액세스 토큰 재발급하는 로직 작성하는 곳
       */
      console.log(new Date(), new Date(token.accessTokenExp));
      if (Date.now() > token.accessTokenExp) {
        return reissueToken(token);
      }

      return token;
    },
    async session({ session, token }) {
      if (token.member) {
        session.user = token.member;
        session.accessToken = token.accessToken;
        session.accessTokenExp = token.accessTokenExp;
        session.refreshToken = token.refreshToken;
      }

      console.log('session: [' + JSON.stringify(session) + ']');
      return session;
    },
  },
};
