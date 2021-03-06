import Head from 'next/head';
import Image from 'next/image';
import SideBar from '../components/SideBar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Spotify 2.0</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <h1>This is a DOPE spotify 2.0 build</h1>

      <main>
        <SideBar/>
      </main>
      <div>{/* Player */}</div>
    </div>
  );
}
