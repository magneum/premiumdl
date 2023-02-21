import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useTypewriter } from "react-simple-typewriter";
import Link from "next/link";

export default function SPOTIFY() {
  var [Lines] = useTypewriter({
    words: ["Spotify +", "Spotify Audio"],
    delaySpeed: 2000,
    loop: true,
  });

  return (
    <div className="bg-[#1c1b1b] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 font-serif">
      <Header />
      <div className="h-screen w-screen bg-[#1c1b1b] flex items-center">
        <div className="container flex flex-col md:flex-row items-center justify-between px-5 text-white">
          <div className="w-full lg:w-1/2 mx-8">
            <div className="text-7xl text-green-500 font-dark font-extrabold mb-8">
              404
            </div>
            <p className="text-2xl md:text-3xl font-light leading-normal mb-8">
              Sorry we couldn't find the page you're looking for
            </p>

            <Link
              href="/"
              className="px-5 inline py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-green-600 active:bg-red-600 hover:bg-red-700"
            >
              back to homepage
            </Link>
          </div>
          <div className="w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12">
            <img
              src="https://user-images.githubusercontent.com/43953425/166269493-acd08ccb-4df3-4474-95c7-ad1034d3c070.svg"
              className=""
              alt="Page not found"
            ></img>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
