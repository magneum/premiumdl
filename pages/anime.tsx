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
    words: ["500 Server error"],
    delaySpeed: 1000,
    loop: true,
  });

  return (
    <div className="bg-[#121112] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <header className="sticky top-0 p-5 flex items-center justify-center max-w-full mx-auto bg-zinc-900 rounded-t rounded-3xl">
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

        <motion.div
          initial={{ x: -700, opacity: 0, scale: 1 }}
          animate={{ x: 0, opacity: 1, scale: 1.5 }}
          transition={{ duration: 1 }}
          className="flex flex-row items-center"
        >
          <SocialIcon
            url="https://www.github.com/magneum"
            bgColor="transparent"
            fgColor="gray"
          />
        </motion.div>

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

      <section className="h-screen"></section>

      <Footer />
    </div>
  );
}
