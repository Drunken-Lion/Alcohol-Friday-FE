import axios from 'axios';
import NextAuth, { NextAuthOptions } from 'next-auth';
import KakaoProvider from 'next-auth/providers/kakao';

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
      const url = `/api/login/${account?.provider}`;
      const data = account?.access_token;

      // const res = await axios.post(url, data);
      // if (res.status === 200) {
      //   return true;
      // } else {
      //   return false;
      // }

      const testdata = require('public/data/login.json');
      console.log(testdata.jwtResponse);

      // return true;
      return { ...testdata.jwtResponse.accessToken };
    },
    async jwt({ token, user, account, profile }) {
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
