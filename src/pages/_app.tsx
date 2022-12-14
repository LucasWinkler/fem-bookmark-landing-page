import type { AppProps } from 'next/app';
import { Rubik } from '@next/font/google';

import '../styles/globals.css';

const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rubik',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${rubik.variable} min-h-screen font-sans`}>
      <Component {...pageProps} />
    </div>
  );
}
