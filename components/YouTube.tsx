import React from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useTypewriter } from "react-simple-typewriter";
import { BsFillCameraVideoFill, BsFillFileMusicFill } from "react-icons/bs";

function getAudio(audio: any, title: any) {
return `/api/audio?audio=${audio}&title=${title}`;
}
function getVideo(audio: any, title: any, video: any) {
return `/api/video?video=${video}&audio=${audio}&title=${title}`;
}

function YouTube() {
var userInput: any = useRef();
var [isLoading, setLoading] = useState(false);
var [gotmetadata, setmetaData] = useState<any>();
var handleSubmit = async (event: any) => {
event.preventDefault();
setLoading(true);
var _got = await axios.get(`https://tz2k7x-33073.preview.csb.app/metadata?q=${userInput.current.value}`);
setmetaData(_got.data);
console.log(_got.data);
setLoading(false);
};
var [Lines] = useTypewriter({
words: ["YouTube +", "YouTube Audio", "YouTube Video"],
delaySpeed: 1000,
loop: true,
});

return (
<section className="h-full items-center w-full px-5 py-12 justify-center flex bg-gradient-to-tl bg-[#1c1b1b]">
<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
{gotmetadata ? (
<div className="grid gap-10 lg:grid-cols-2">
<div className="lg:pr-10">
<h5 className="mb-8 text-2xl font-semibold italic leading-none">
<motion.div
initial={{ x: 200, opacity: 0, scale: 1 }}
animate={{ x: 0, opacity: 1, scale: 1 }}
transition={{ duration: 1 }}
>
<h1 className="not-italic max-w-5xl text-4xl font-bold  leading-none tracking-tighter md:text-5xl lg:text-6xl lg:max-w-7xl text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
☉ {Lines}
</h1>
</motion.div>
</h5>
<hr className=" border-orange-800 border-2 rounded-2xl" />
<p className="mb-6 mt-1 max-w-xl mx-auto font-medium tracking-wider leading-relaxed text-gray-400 italic text-sm">
<span className="font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
Description:{" "}
</span>{" "}
{gotmetadata._search.DESCRIPTION.toLowerCase()}
<hr className=" border-orange-700/30" />
</p>

<div className="flex space-x-2 sm:space-x-4 pt-2">
👭🏻
<div className="space-y-0">
<p className="sm:text-sm md:text-lg lg:text-1xl xl:text-2xl text-sm font-semibold leading-snug capatilize tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
Video Id:{" "}
<span className="text-white/50 text-sm italic font-medium">
{gotmetadata._search.YT_ID}
</span>
</p>
</div>
</div>
<div className="flex space-x-2 sm:space-x-4 pt-2">
👀
<div className="space-y-0">
<p className="sm:text-sm md:text-lg lg:text-1xl xl:text-2xl text-sm font-semibold leading-snug capatilize tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
Views:{" "}
<span className="text-white/50 text-sm italic font-medium">
{gotmetadata._search.VIEWS}
</span>
</p>
</div>
</div>
<div className="flex space-x-2 sm:space-x-4 pt-2">
🗓️
<div className="space-y-0">
<p className="sm:text-sm md:text-lg lg:text-1xl xl:text-2xl text-sm font-semibold leading-snug capatilize tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
upload Date:{" "}
<span className="text-white/50 text-sm italic font-medium">
{gotmetadata._search.UPLOADED}
</span>
</p>
</div>
</div>
<div className="flex space-x-2 sm:space-x-4 pt-2">
⏳
<div className="space-y-0">
<p className="sm:text-sm md:text-lg lg:text-1xl xl:text-2xl text-sm font-semibold leading-snug capatilize tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
Duration:{" "}
<span className="text-white/50 text-sm italic font-medium">
{gotmetadata._search.DURATION_FULL}
</span>
</p>
</div>
</div>
<div className="flex space-x-2 sm:space-x-4 pt-2">
🖊️
<div className="space-y-0">
<p className="sm:text-sm md:text-lg lg:text-1xl xl:text-2xl text-sm font-semibold leading-snug capatilize tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
Author:{" "}
<span className="text-white/50 text-sm italic font-medium">
{gotmetadata._search.AUTHOR_NAME}
</span>
</p>
</div>
</div>
<div className="flex space-x-2 sm:space-x-4 pt-2">
🔗
<div className="space-y-0">
<p className="sm:text-sm md:text-lg lg:text-1xl xl:text-2xl text-sm font-semibold leading-snug capatilize tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
Link:{" "}
<span className="text-white/50 text-sm italic font-medium">
{gotmetadata._search.LINK}
</span>
</p>
</div>
</div>

<br></br>
<span className="label-text-alt font-bold text-yellow-400">
⚠️ Download time depends on video length and quality.
</span>
<br></br>

{isLoading ? null : (
<div className="navbar">
<div className="navbar-start">
<div className="dropdown pr-2">
<label
tabIndex={0}
className="btn btn-ghost bg-orange-900 animate-pulse text-xl"
>
<BsFillFileMusicFill />
</label>
<ul
tabIndex={0}
className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-stone-900 border rounded-lg border-orange-800/50"
>
<li tabIndex={0}>
<a
className="italic"
href={getAudio(
gotmetadata._audio,
gotmetadata._search.TITLE
)}
>
best available
</a>
</li>
</ul>
</div>
<br></br>
<div className="dropdown pr-3">
<label
tabIndex={0}
className="btn btn-ghost bg-orange-900 animate-pulse text-xl"
>
<BsFillCameraVideoFill />
</label>
<ul
tabIndex={0}
className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-stone-900 border rounded-lg border-orange-800/50"
>
<li tabIndex={0}>
{gotmetadata._video._1080p !== undefined ? (
<a
className="italic"
href={getVideo(
gotmetadata._audio,
gotmetadata._search.TITLE,
gotmetadata._video._1080p
)}
>
1080p
</a>
) : (
<a className="italic text-red-800">(null) 1080p </a>
)}

{gotmetadata._video._720p !== undefined ? (
<a
className="italic"
href={getVideo(
gotmetadata._audio,
gotmetadata._search.TITLE,
gotmetadata._video._720p
)}
>
720p
</a>
) : (
<a className="italic text-red-800">(null) 720p </a>
)}

{gotmetadata._video._480p !== undefined ? (
<a
className="italic"
href={getVideo(
gotmetadata._audio,
gotmetadata._search.TITLE,
gotmetadata._video._480p
)}
>
480p
</a>
) : (
<a className="italic text-red-800">(null) 480p </a>
)}

{gotmetadata._video._360p !== undefined ? (
<a
className="italic"
href={getVideo(
gotmetadata._audio,
gotmetadata._search.TITLE,
gotmetadata._video._360p
)}
>
360p
</a>
) : (
<a className="italic text-red-800">(null) 360p </a>
)}

{gotmetadata._video._240p !== undefined ? (
<a
className="italic"
href={getVideo(
gotmetadata._audio,
gotmetadata._search.TITLE,
gotmetadata._video._240p
)}
>
240p
</a>
) : (
<a className="italic text-red-800">(null) 240p </a>
)}

{gotmetadata._video._144p !== undefined ? (
<a
className="italic"
href={getVideo(
gotmetadata._audio,
gotmetadata._search.TITLE,
gotmetadata._video._144p
)}
>
144p
</a>
) : (
<a className="italic text-red-800">(null) 144p </a>
)}
</li>
</ul>
</div>
</div>
</div>
)}
</div>

<div>
<span className="label-text font-bold">
<span className="text-xl uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
Title:{" "}
</span>{" "}
{gotmetadata._search.THUMB}
</span>
<img
alt=""
src={gotmetadata._search.THUMB}
className="rounded-2xl mt-6"
/>
</div>
</div>
) : (
<div className="grid gap-10 lg:grid-cols-2">
<div className="lg:pr-10">
<h5 className="mb-4 text-2xl font-semibold italic leading-none">
<motion.div
initial={{ x: 200, opacity: 0, scale: 1 }}
animate={{ x: 0, opacity: 1, scale: 1 }}
transition={{ duration: 1 }}
>
<h1 className="not-italic max-w-5xl text-4xl font-bold  leading-none tracking-tighter md:text-5xl lg:text-6xl lg:max-w-7xl text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
☉ {Lines}
</h1>
</motion.div>
<p className="mb-6 text-gray-90 pt-10 pb-10 max-w-xl mx-auto text-base tracking-wider leading-relaxed text-gray-500 italic">
YouTube is a global online video sharing and social media
platform headquartered in San Bruno, California. It was
launched on February 14, 2005, by Steve Chen, Chad Hurley, and
Jawed Karim. It is owned by Google, and is the second most
visited website, after Google Search.
</p>
</h5>

<hr className="border-yellow-400" />
<label className="label">
<span className="label-text font-semibold">
YouTube Link or Song Name!
</span>
<span className="label-text-alt font-bold text-yellow-400">
⚠️ required
</span>
</label>

<form onSubmit={handleSubmit}>
<input
required
type="text"
ref={userInput}
id="hero-field"
name="hero-field"
placeholder="required"
className="w-full rounded bg-stone-900 focus:ring-2 focus:ring-neutral-600 focus:bg-transparent focus:border-orange-500 text-base outline-none text-gray-100 px-2 transition-colors duration-200 ease-in-out"
></input>

{isLoading ? (
<button
type="button"
className="mt-2 bg-stone-800 inline-flex items-center px-4 py-2 text-sm font-semibold leading-6 text-yellow-400 transition duration-150 ease-in-out rounded-md shadow cursor-not-allowed border border-yellow-700"
disabled
>
<svg
className="w-5 h-5 mr-3 -ml-1 text-yellow-500 animate-spin"
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
>
<circle
className="opacity-25"
cx="12"
cy="12"
r="10"
stroke="currentColor"
stroke-width="4"
></circle>
<path
className="opacity-75"
fill="currentColor"
d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
></path>
</svg>
<span className="label-text-alt text-yellow-500 text-xs">
💡 Be patient!{" "}
<span className="italic">
Good things need time to happen.
</span>
</span>
</button>
) : (
<button
type="submit"
className="mt-2 inline-flex text-white bg-neutral-600 border-0 py-2 px-6 focus:outline-none hover:bg-neutral-700 rounded text-lg"
>
Search
</button>
)}
</form>
</div>
<div>
<img
className="object-cover w-full h-56 rounded sm:h-96"
src="https://i.pinimg.com/originals/f8/8a/ca/f88acab7ffd127b4465659500aa0538f.gif"
alt=""
/>
</div>
</div>
)}
</div>
</section>
);
}

export default YouTube;
