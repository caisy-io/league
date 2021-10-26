import { Card, Img } from "@caisy/league";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>nextjs with treeshaking</title>
        <meta name="description" content="nextjs with treeshaking @caisy/league" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Card>
        <main className={styles.main}>
          <h1 className={styles.title}>nextjs with treeshaking</h1>
        </main>
      </Card>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
