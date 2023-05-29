import Head from "next/head";
import { Navbar } from "./component/navbar";
export default function Home() {
  
  return (
    <>
      <Head>
        <title>ModiM Wiki</title>
        <link rel="icon" href="/favicon.ico" />\
      </Head>
      <Navbar />

    </>
  );
}
