import Head from 'next/head';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <div>
      <Head>
        <title>About Us - Better.com</title>
      </Head>
      <header>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about-us">About Us</Link>
          <Link href="/mortgage-calculator">Mortgage Calculator</Link>
          <Link href="/start">Start</Link>
        </nav>
      </header>
      <main>
        <h1>About Us</h1>
        <p>This is the About Us page.</p>
      </main>
    </div>
  );
}
