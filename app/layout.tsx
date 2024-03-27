import type { Metadata } from 'next';
// import { getServerSession } from 'next-auth';

// import { authOptions } from './_utils/authOptions';
import ReactQueryProvider from './_hooks/useReactQuery';

import AuthSession from './AuthSession';
import Header from './_components/Header';
import Footer from './_components/Footer';

import './globals.css';
// import Head from 'next/head';
// import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // const session = await getServerSession();
  return (
    <html lang="en">
      {/* <Head>
        <Script
          strategy="beforeInteractive"
          type="text/javascript"
          src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=55o5aqry2f"
          onError={(e) => {
            console.error('Script failed to load', e);
          }}
        />
      </Head> */}
      <body>
        <ReactQueryProvider>
          <AuthSession>
            <Header />
            {children}
            <Footer />
          </AuthSession>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
