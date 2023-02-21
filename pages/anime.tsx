import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Footer from "../components/Footer";
import { BiErrorCircle } from "react-icons/Bi";
import { SocialIcon } from "react-social-icons";
import { useTypewriter } from "react-simple-typewriter";

export default function SPOTIFY() {
  var [Lines] = useTypewriter({
    words: ["Anime Searcher", "Metainfo Scrapper"],
    delaySpeed: 1000,
    loop: true,
  });

  var _color = ["/anime/anime_1.gif", "/anime/anime_2.gif"];
  var _colorI = _color[Math.floor(Math.random() * _color.length)];

  return (
    <div className="bg-[#121112] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <header className="sticky top-0 p-5 flex items-center justify-center max-w-full mx-auto bg-neutral-900 rounded-t rounded-3xl">
        <motion.div
          initial={{ x: -200, opacity: 0, scale: 1 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-row items-center"
        >
          <SocialIcon
            url="https://www.spotify.com"
            bgColor="transparent"
            fgColor="gray"
          />
        </motion.div>

        <SocialIcon
          url="https://www.github.com/magneum"
          bgColor="transparent"
          fgColor="gray"
        />

        <motion.div
          initial={{ x: 200, opacity: 0, scale: 1 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-row items-center"
        >
          <SocialIcon
            url="https://www.youtube.com"
            bgColor="transparent"
            fgColor="gray"
          />
        </motion.div>
      </header>

      <section>
        <div className="items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
          <div className="flex w-full mx-auto text-left">
            <div className="inline-flex items-center mx-auto align-middle">
              <div className="text-center">
                <motion.div
                  initial={{ x: 200, opacity: 0, scale: 1 }}
                  animate={{ x: 0, opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  <h1 className="font-serif max-w-5xl text-4xl font-bold leading-none tracking-tighter md:text-5xl lg:text-6xl lg:max-w-7xl text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-purple-400 to-blue-400">
                    Anime Hub
                  </h1>
                </motion.div>
                <h1 className="pt-2 max-w-5xl text-xl font-bold leading-none tracking-tighter md:text-2xl lg:text-3xl xl:text-4xl lg:max-w-7xl text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-purple-400 to-blue-400">
                  <br className="hidden lg:block"></br>☉ {Lines}
                </h1>
                <p className="max-w-xl mx-auto mt-8 text-base tracking-wider leading-relaxed text-gray-500 italic">
                  Anime is hand-drawn and computer-generated animation
                  originating from Japan.<br></br>
                  Outside of Japan and in English, anime refers specifically to
                  animation produced in Japan.<br></br>
                  However, in Japan and in Japanese, anime describes all
                  animated works, regardless of style or origin.
                </p>
              </div>
            </div>
          </div>
          <section id="intro">
            <div className="flex flex-col items-center justify-center pt-24 mx-auto rounded-lg lg:px-10 max-w-7xl">
              <Image
                alt="hero"
                width={900}
                height={900}
                src="/anime/anime_3.gif"
                className="object-cover object-center w-full rounded-xl grayscale animate-pulse"
              />
              <button
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="flex items-center rounded bg-purple-400 px-6 pt-2.5 pb-2 text-xs font-bold uppercase leading-normal text-black shadow-md transition duration-150 ease-in-out hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg mt-4"
              >
                Search
              </button>
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </div>
  );
}
