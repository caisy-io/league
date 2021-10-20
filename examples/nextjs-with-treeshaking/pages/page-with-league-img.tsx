import { Img } from "@caisy/league";
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

      <main className={styles.main}>
        <h1 className={styles.title}>nextjs with treeshaking</h1>

        <Img src="https://images.pexels.com/photos/8971507/pexels-photo-8971507.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" resolution={1200} />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
