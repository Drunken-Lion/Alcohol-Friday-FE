import NextAuth, { NextAuthOptions } from 'next-auth';
import KakaoProvider from 'next-auth/providers/kakao';

import instance from 'app/_service/axios';

type KakaoProfile = {
  id: number;
  kakao_account: any;
};

type Props = {
  children: React.ReactNode;
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
      const url = `/v1/auth/login/${account?.provider}`;
      console.log(url);
      console.log(account?.access_token);
      const res = await instance.post(url, account?.access_token);
      if (res.status !== 200) {
        console.log(res.data);
        return false;
      }

      const data = res.data;
      account!!.memberResponse = data.memberResponse;
      account!!.jwtResponse = data.jwtResponse;

      return true;
    },
    async jwt({ token, user, account, profile }) {
      console.log(account);
      // if (account) {
      //   token.
      // }
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
