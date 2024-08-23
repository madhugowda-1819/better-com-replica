import Head from 'next/head';
import Link from 'next/link';

export default function Start() {
  return (
    <div>
      <Head>
        <title>Start - Better.com</title>
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
        <h1>Start Your Journey</h1>
        <p>This is the start page.</p>
      </main>
    </div>
  );
}
