import { RichTextRenderer } from "@caisy/league";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const richtextContent = {
  type: "doc",
  content: [
    {
      type: "heading",
      attrs: { level: 1 },
      content: [{ text: "FEINE NUANCEN: 3 AROMAPROFILE PRO BOHNE", type: "text" }],
    },
    { type: "heading", attrs: { level: 1 } },
    {
      type: "paragraph",
      attrs: { textAlign: "left" },
      content: [
        {
          text: "Sie können sich sicher vorstellen: Nicht mit jeder Bohnensorte lässt sich ein fantastischer Espresso oder Kaffee zaubern. Aber mit guten Bohnen und der richtigen Röstung, übernimmt ihre NIVONA den Rest und sorgt für gutes Gelingen.  ",
          type: "text",
        },
      ],
    },
    { type: "paragraph", attrs: { textAlign: "left" } },
    {
      type: "paragraph",
      attrs: { textAlign: "left" },
      content: [
        {
          text: "Sie stellen ein Aromaprofil nach dem anderen ein und testen und vergleichen Sie die Ergebnisse. Je nach Sorte und Röstung (helle/mittlere/dunkle Röstung, Arabica/Robusta, säurehaltig/säurearm) ergeben sich eine Fülle von wunderbaren, geschmacklichen Möglichkeiten.",
          type: "text",
        },
      ],
    },
    { type: "paragraph", attrs: { textAlign: "left" } },
    {
      type: "paragraph",
      attrs: { textAlign: "left" },
      content: [
        {
          text: "Der Geschmack ist immer ein anderer: Mit der Wahl des Prozesses Dynamic, Constant oder Intense ist der Kaffee von fein säuerlich, mittel bis leicht und angenehm bitter - immer abhängig von der Bohnensorte und Röstung.",
          type: "text",
        },
      ],
    },
    { type: "paragraph", attrs: { textAlign: "left" } },
    {
      type: "paragraph",
      attrs: { textAlign: "left" },
      content: [
        {
          text: "Das neue Aroma Balance System schafft, was sonst nur ein Barista zu leisten vermag. Weswegen wir es »Barista in a box« genannt haben. Es variiert Druck, Durchlaufgeschwindigkeit und die Dauer, mit der das Wasser im frisch gemahlenen Kaffee verbleibt. In aufwendigen Tests haben wir die drei Profile entwickelt, die mit nur einer Bohnensorte eine Vielfalt an Geschmackserlebnissen erzielen.",
          type: "text",
        },
      ],
    },
    { type: "paragraph", attrs: { textAlign: "left" } },
    {
      type: "paragraph",
      attrs: { textAlign: "left" },
      content: [
        {
          text: "Die drei verschiedenen Aromaprofile finden Sie in der CafeRomatica 1030, der 8er-Baureihe, drei Modellen der 7er-Baureihe und der 6er-Baureihe.",
          type: "text",
        },
      ],
    },
  ],
};

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

        <RichTextRenderer node={richtextContent} />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
