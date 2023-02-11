import React from "react";
import { motion } from "framer-motion";
import { cursor, useTypewriter } from "react-simple-typewriter";

function Hero() {
  const [Lines, count] = useTypewriter({
    words: ["bit.ly/premiumdl", "bit.ly/Premiumdl"],
    loop: true,
    delaySpeed: 2000,
  });

  const [Lines_, count_] = useTypewriter({
    words: ["Youtube + Spotify Fremium downloder"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
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
                <h1 className="font-serif max-w-5xl text-5xl font-bold leading-none tracking-tighter md:text-5xl lg:text-6xl lg:max-w-7xl text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-900 to-blue-600">
                  bit.ly/premiumdl
                </h1>
              </motion.div>
              <h1 className="pt-2 max-w-5xl text-2xl font-bold leading-none tracking-tighter md:text-3xl lg:text-4xl lg:max-w-7xl text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-900 to-blue-600">
                <br className="hidden lg:block"></br>☉ {Lines_} ☉
              </h1>
              <p className="max-w-xl mx-auto mt-8 text-base tracking-wider leading-relaxed text-gray-500 italic">
                - PREMIUMDL allows you to convert & download video and audio
                from YouTube, Spotify in HD quality. Available formats are .mp3
                .mp4
                <br></br>- You can easily download for free thousands of videos
                from YouTube and other websites.<br></br>- Once the required
                video url or song name is provided, all the meta informations
                are shown in the page.
              </p>
            </div>
          </div>
        </div>
        <section id="intro">
          <div className="flex flex-col items-center justify-center pt-24 mx-auto rounded-lg lg:px-10 max-w-7xl">
            <img
              className="object-cover object-center w-full rounded-xl"
              alt="hero"
              src="https://music.school/templates/school/images/dist/Sound_wave_preloader.gif"
            ></img>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Hero;
