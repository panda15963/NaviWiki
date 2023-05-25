import Head from "next/head";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <Head>
        <title>Tailwind Sidebar + Navbar Tutorial</title>
        <link rel="icon" href="/favicon.ico" />\
      </Head>
      <div className="flex w-64 h-screen bg-gray-800">
        <div className="flex flex-col w-full">
          <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <Image
                className="w-auto h-8 mr-3"
                src="/img/logo.png"
                width={50}
                height={50}
                alt="wiki"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
