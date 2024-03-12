'use client';
import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react';
import type { Session } from 'next-auth';
import { usePathname, useSearchParams } from 'next/navigation';

export default function page() {
  const pathname = usePathname();
  const params = useSearchParams();
  const code = params.get('code');
  console.log(code);

  // useEffect(() => {
  //   if (code !== undefined) {
  //     console.log(code);
  //   }
  // }, [code]);

  return <div></div>;
}
