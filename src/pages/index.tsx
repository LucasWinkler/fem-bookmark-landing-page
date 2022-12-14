import Head from 'next/head';

import Header from 'components/Header';
import Hero from 'components/Hero';
import Features from 'components/Features';
import DownloadExtension from 'components/DownloadExtension';
import FAQ from 'components/FAQ';
import Newsletter from 'components/Newsletter';
import Footer from 'components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Bookmark landing page</title>
        <meta
          name='description'
          content='A clean and simple interface to organize your favourite websites'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' type='image/png' href='/favicon-32x32.png' />
      </Head>

      <Header />
      <main>
        <Hero />
        <Features />
        <DownloadExtension />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
