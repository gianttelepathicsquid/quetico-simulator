import React from 'react';
import Head from 'next/head';
import { QueticoSimulator } from '../components/QueticoSimulator';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Quetico 3PL Operations Simulator</title>
        <meta name="description" content="Experience 3PL operations with Quetico's interactive simulator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <QueticoSimulator />
      </main>
    </div>
  );
}
