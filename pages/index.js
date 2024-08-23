import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home - Better.com</title>
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
        <h1>Welcome to Better.com Replica</h1>
        <p>This is the home page.</p>
      </main>
    </div>
  );
}
