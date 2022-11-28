import Head from 'next/head';
import Dashboard from './Dashboard';

export default function Home() {
  return (
    <div className="m-[0 auto] h-screen grid items-end">
      <Head>
        <title>DefiQuant</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="title">DefiQuant</h1>
      <main>
        <Dashboard />
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Yuri Ramos
        </a>
      </footer>
    </div>
  );
}
