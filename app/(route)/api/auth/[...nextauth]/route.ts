import NextAuth, { NextAuthOptions } from 'next-auth';
import KakaoProvider from 'next-auth/providers/kakao';

import instance from 'app/_service/axios';

type Member = {
  id: number;
  email: string;
  nickname?: string;
  phone?: number;
  provider: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
};

type Jwt = {
  accessToken: string;
  accessTokenExp: number;
  refreshToken: string;
};

type Account = {
  member: Member;
  jwt: Jwt;
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
    async signIn({ account, profile }) {
      // const url = `/v1/auth/login/${account?.provider}`;
      const url = '/v1/auth/test';
      // const res = await instance.post(url, account?.access_token);
      const res = await instance.post(url, 'ekslws123@nate.com');
      if (res.status !== 200) {
        // console.log(res);
        return false;
      }

      const data = res.data;
      // console.log(data);
      account!!.memberResponse = data.memberResponse;
      account!!.jwtResponse = data.jwtResponse;
      account!!.access_token = data.jwtResponse.accessToken;
      account!!.refresh_token = data.jwtResponse.refreshToken;
      // console.log(account);

      return true;
    },
    async jwt({ token, account }) {
      console.log(account);
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
        token.member = account.memberResponse;
      }

      /**
       * 리프레시 토큰 이용해서 액세스 토큰 재발급하는 로직 작성하는 곳
       */
      console.log('token: ' + JSON.stringify(token));
      return token;
    },
    async session({ session, token, user }) {
      if (token.member) {
        session.user = token.member;
      }

      console.log('session info');
      console.log(session);

      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
