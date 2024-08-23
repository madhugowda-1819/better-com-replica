import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function MortgageCalculator() {
  const [principal, setPrincipal] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [years, setYears] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const calculateMortgage = () => {
    const monthlyRate = interestRate / 100 / 12;
    const numOfPayments = years * 12;
    const monthly = 
      (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numOfPayments));
    setMonthlyPayment(monthly.toFixed(2));
  };

  return (
    <div>
      <Head>
        <title>Mortgage Calculator - Better.com</title>
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
        <h1>Mortgage Calculator</h1>
        <div>
          <label>
            Principal:
            <input 
              type="number" 
              value={principal} 
              onChange={(e) => setPrincipal(e.target.value)} 
            />
          </label>
          <label>
            Interest Rate (%):
            <input 
              type="number" 
              value={interestRate} 
              onChange={(e) => setInterestRate(e.target.value)} 
            />
          </label>
          <label>
            Years:
            <input 
              type="number" 
              value={years} 
              onChange={(e) => setYears(e.target.value)} 
            />
          </label>
          <button onClick={calculateMortgage}>Calculate</button>
          {monthlyPayment && (
            <p>Your Monthly Payment is: ${monthlyPayment}</p>
          )}
        </div>
      </main>
    </div>
  );
}
