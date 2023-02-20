import YouTube from "../components/YouTube";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-[#121112] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Premiumdl</title>
        <meta
          name="description"
          content="Premiumdl allows you to convert & download video and audio."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />

        <section id="Hero">
          <Hero />
        </section>
        <div className="flex flex-col w-full border-opacity-50">
          <div className="divider text-sky-900 text-2xl"> ☉ </div>
        </div>

        <section id="Hero">
          <YouTube />
        </section>
        <div className="flex flex-col w-full border-opacity-50">
          <div className="divider text-sky-900 text-2xl"> ☉ </div>
        </div>

        <section id="Footer">
          <Footer />
        </section>
      </main>
    </div>
  );
}
