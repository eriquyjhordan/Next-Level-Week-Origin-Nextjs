import Head from "next/head";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div className={styles.navBar}>
          <img src="/Logo.svg" alt="Doctor Care logo" />
          <div>
            <a href="/">
              <img src="/menu-icon.svg" alt="menu button" />
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
