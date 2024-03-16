import NextAuth, { NextAuthOptions } from 'next-auth';
import { getSession } from 'next-auth/react';
import KakaoProvider from 'next-auth/providers/kakao';

import serverInstance from 'app/_service/axios-server';
import { JWT } from 'next-auth/jwt';

const reissueToken = async (token: JWT) => {
  // const session = await getSession();
  // const refreshToken = session?.refreshToken;
  const res = await serverInstance.post('/v1/auth/reissue-token', token.refreshToken, {
    headers: { 'Content-Type': 'text/plain' },
  });

  console.log('reissueToken res: ' + res);

  return {
    ...token,
    accessToken: res.data.accessToken,
    accessTokenExp: res.data.accessTokenExp,
    refreshToken: res.data.refreshToken ?? token.refreshToken,
  };
};

export const authOptions: NextAuthOptions = {
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: '/login',
    signOut: '/logout',
  },
  callbacks: {
    async signIn({ account }) {
      const url = `/v1/auth/login/${account?.provider}`;
      const token = account?.access_token;
      const res = await serverInstance.post(url, token, {
        headers: { 'Content-Type': 'text/plain' },
      });
      if (res.status !== 200) {
        return false;
      }

      const data = res.data;
      account!!.memberResponse = data.memberResponse;
      account!!.access_token = data.jwtResponse.accessToken;
      account!!.refresh_token = data.jwtResponse.refreshToken;
      account!!.expires_at = data.jwtResponse.accessTokenExp;

      return true;
    },
    async jwt({ token, account }) {
      if (account) {
        return {
          accessToken: account.access_token,
          accessTokenExp: account.expires_at,
          refreshToken: account.refresh_token,
          member: account.memberResponse,
        };
        // token.accessToken = account.access_token;
        // token.refreshToken = account.refresh_token;
        // token.member = account.memberResponse;
      }

      /**
       * 리프레시 토큰 이용해서 액세스 토큰 재발급하는 로직 작성하는 곳
       */
      console.log('date now: ' + Date.now());
      console.log('accessTokenExp: ' + token.accessTokenExp);
      if (Date.now() < token.accessTokenExp) {
        return token;
      }

      return reissueToken(token);
    },
    async session({ session, token }) {
      if (token.member) {
        session.user = token.member;
        session.accessToken = token.accessToken;
        session.refreshToken = token.refreshToken;
      }

      console.log('session: [' + JSON.stringify(session) + ']');
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
