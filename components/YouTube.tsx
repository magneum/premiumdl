import React from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useTypewriter } from "react-simple-typewriter";
import { BsFillCameraVideoFill, BsFillFileMusicFill } from "react-icons/bs";
import Link from "next/link";

function getAudio(audio: any, title: any) {
  return `https://fl062n-8081.preview.csb.app/audio?audio=${audio}&title=${title}`;
  // return `/api/audio?audio=${audio}&title=${title}`;
}
function getVideo(audio: any, title: any, video: any) {
  return `https://fl062n-8081.preview.csb.app/video?video=${video}&audio=${audio}&title=${title}`;
  // return `/api/video?video=${video}&audio=${audio}&title=${title}`;
}

function YouTube() {
  var userInput: any = useRef();
  var [isLoading, setLoading] = useState(false);
  var [gotmetadata, setmetaData] = useState<any>();
  var handleSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);
    var _got = await axios.get(
      `https://fl062n-8081.preview.csb.app/metadata?q=${userInput.current.value}`
    );
    setmetaData(_got.data);
    console.log(_got.data);
    setLoading(false);
  };
  var [Lines] = useTypewriter({
    words: ["YouTube +", "YouTube Audio", "YouTube Video"],
    delaySpeed: 1000,
    loop: true,
  });

  var [Lines_S] = useTypewriter({
    words: ["Spotify +", "Spotify Audio"],
    delaySpeed: 1000,
    loop: true,
  });

  return (
    <section className="h-full items-center w-full px-5 py-12 justify-center flex bg-gradient-to-tl bg-[#232323]">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        {/* YOUTUBE DOWNLOAD  */}
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="lg:pr-10">
            <h5 className="mb-4 text-2xl font-semibold italic leading-none">
              <motion.div
                initial={{ x: 200, opacity: 0, scale: 1 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <h1 className="not-italic max-w-5xl text-4xl font-bold  leading-none tracking-tighter md:text-5xl lg:text-6xl lg:max-w-7xl text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-yellow-500">
                  ☉ {Lines}
                </h1>
              </motion.div>
              <p className="mb-6 text-gray-90 pt-10 pb-10 max-w-xl mx-auto text-base tracking-wider leading-relaxed text-gray-500 italic">
                YouTube is a global online video sharing and social media
                platform headquartered in San Bruno, California. It was launched
                on February 14, 2005, by Steve Chen, Chad Hurley, and Jawed
                Karim. It is owned by Google, and is the second most visited
                website, after Google Search.
              </p>
            </h5>
            <Link href="/youtube">
              <button
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="flex items-center rounded bg-stone-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-stone-700 hover:shadow-lg focus:bg-stone-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-stone-800 active:shadow-lg mt-4"
              >
                YouTube Converter
              </button>
            </Link>
            <hr className="border-yellow-100" />
          </div>
          <div>
            <img
              className="object-cover w-full h-56 rounded-xl sm:h-96"
              src="/youtube.gif"
              alt=""
            />
          </div>
        </div>
        {/* YOUTUBE DOWNLOAD  */}
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="lg:pr-10">
            <h5 className="mb-4 text-2xl font-semibold italic leading-none">
              <motion.div
                initial={{ x: 200, opacity: 0, scale: 1 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <h1 className="not-italic max-w-5xl text-4xl font-bold  leading-none tracking-tighter md:text-5xl lg:text-6xl lg:max-w-7xl text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-500">
                  ☉ {Lines_S}
                </h1>
              </motion.div>
              <p className="mb-6 text-gray-90 pt-10 pb-10 max-w-xl mx-auto text-base tracking-wider leading-relaxed text-gray-500 italic">
                Spotify is a proprietary Swedish audio streaming and media
                services provider founded on 23 April 2006 by Daniel Ek and
                Martin Lorentzon. It is one of the largest music streaming
                service providers, with over 489 million monthly active users,
                including 205 million paying subscribers, as of December 2022.
              </p>
            </h5>
            <Link href="/spotify">
              <button
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="flex items-center rounded bg-stone-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-stone-700 hover:shadow-lg focus:bg-stone-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-stone-800 active:shadow-lg mt-4"
              >
                Spotify Converter
              </button>
            </Link>
            <hr className="border-yellow-100" />
          </div>
          <div>
            <img
              className="object-cover w-full h-56 rounded-xl sm:h-96"
              src="/spotify.gif"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default YouTube;
