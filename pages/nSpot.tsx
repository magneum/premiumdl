import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useTypewriter } from "react-simple-typewriter";
import Link from "next/link";

export default function SPOTIFY() {
var [Lines] = useTypewriter({
words: ["ERROR :(", "Wrong Url !"],
delaySpeed: 2000,
loop: true,
});

return (
<div className="bg-[#121112] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 font-serif">
<Header />
<div className="h-screen w-screen bg-[#121112] flex items-center">
<div className="container flex flex-col md:flex-row items-center justify-between px-5 text-white">
<div className="w-full lg:w-1/2 mx-8">
<div className="text-5xl text-red-500 font-dark font-extrabold mb-8">
- {Lines}
</div>
<p className="text-xl md:text-3xl font-light leading-normal mb-8 text-red-300/80">
You have selected{" "}
<span className="italic font-semibold">
'Spotiify Downloader'.
</span>
<br></br>
But provided a non-spotify link or a spotify playlist link which
is not yet supported.<br></br>
Please provide spotify{" "}
<span className="italic font-semibold">'Single Track'</span> link.
</p>

<Link
href="/"
className="px-5 inline py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-gray-600 active:bg-red-600 hover:bg-red-700"
>
Back to Homepage
</Link>
<Link
href="/spotify"
className="ml-2 px-5 inline py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-gray-600 active:bg-red-600 hover:bg-red-700"
>
Back to Spotify
</Link>
</div>
<div className="w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12">
<img
alt="Page not found"
className="hue-rotate-90 hover:hue-rotate-60"
src="https://user-images.githubusercontent.com/43953425/166269493-acd08ccb-4df3-4474-95c7-ad1034d3c070.svg"
></img>
</div>
</div>
</div>

<Footer />
</div>
);
}
