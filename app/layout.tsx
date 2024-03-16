import type { Metadata } from 'next';
import { getServerSession } from 'next-auth';

import ReactQueryProvider from './_hooks/useReactQuery';
import AuthSession from './AuthSession';
import Header from './_components/Header';
import Footer from './_components/Footer';

import './globals.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <AuthSession>
            <Header />
            {children}
            {session && <Footer />}
          </AuthSession>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
