import Head from "next/head";
import { Navbar } from "./component/navbar";
export default function Home() {
  
  return (
    <>
      <Head>
        <title>Tailwind Sidebar + Navbar Tutorial</title>
        <link rel="icon" href="/favicon.ico" />\
      </Head>
      <Navbar />

    </>
  );
}
