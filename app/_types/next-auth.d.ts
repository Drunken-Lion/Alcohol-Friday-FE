import NextAuth from 'next-auth';
import { Member } from './member';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's postal address. */
      id: number;
      email: string;
      name: string;
      nickname?: string;
      phone: number;
      provider: string;
      createdAt: string;
      updatedAt: string;
      deletedAt?: string;
    };
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    token: {
      accessToken: string;
      accessTokenExp: number;
      refreshToken: string;
      member: Member;
    };
  }
}
