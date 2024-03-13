import { Nanum_Myeongjo } from 'next/font/google';

const nanum_myeongjo = Nanum_Myeongjo({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  variable: '--nanum_myeongjo',
  display: 'swap',
});

export const PageFontClassNames = nanum_myeongjo.className;
