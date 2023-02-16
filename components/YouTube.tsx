import React from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useTypewriter } from "react-simple-typewriter";
import { BsFillCameraVideoFill, BsFillFileMusicFill } from "react-icons/bs";

function YouTube() {
var urlRef: any = useRef();
var [isLoading, setLoading] = useState(false);
var [urlResult, setUrlResult] = useState<any>();
var [isLoadingVideo, setLoadingVideo] = useState(true);
var [isLoadingAudio, setLoadingAudio] = useState(true);
var [isVideoData, setLoadingVideoData] = useState<any>();
var [isAudioData, setLoadingAudioData] = useState<any>();

var handleSubmit = async (event: any) => {
setLoading(true);
setLoadingVideo(true);
setLoadingAudio(true);
event.preventDefault();
var _data = await axios.get("/api/search?q=" + urlRef.current.value);
var _vdata = await axios.get(
"http://localhost:4000/video?q=" + _data.data._Url
);
var _adata = await axios.get(
"http://localhost:4000/audio?q=" + _data.data._Url
);
setLoadingVideoData(_vdata.data);
setLoadingAudioData(_adata.data);
setUrlResult(_data.data);
setLoadingVideo(false);
setLoadingAudio(false);
setLoading(false);
};

var [Lines] = useTypewriter({
words: ["YouTube +", "YouTube Music", "YouTube Video"],
delaySpeed: 1000,
loop: true,
});

return (
<section className="h-full items-center w-full px-5 py-12 justify-center flex bg-[#1c1b1b]">
<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
{urlResult ? (
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
<hr className="border-gray-400" />
<p className="mb-6 max-w-xl mx-auto text-base tracking-wider leading-relaxed text-gray-500 italic">
<span className="text-sm font-bold uppercase">
Description:{" "}
</span>{" "}
{urlResult._Description.toLowerCase()}
</p>
<div className="flex space-x-2 sm:space-x-4 pt-2">
<svg
fill="none"
stroke="gray"
viewBox="0 0 24 24"
data-darkreader-inline-stroke=""
className="flex-shrink-0 w-6 h-6"
xmlns="http://www.w3.org/2000/svg"
>
<path
strokeLinecap="round"
strokeLinejoin="round"
strokeWidth="2"
d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
></path>
</svg>
<div className="space-y-0">
<p className="sm:text-sm md:text-lg lg:text-1xl xl:text-2xl text-sm font-semibold leading-snug capatilize tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
Video Id:{" "}
<span className="text-white/50 text-sm italic">
{urlResult._vID}
</span>
</p>
</div>
</div>
<div className="flex space-x-2 sm:space-x-4 pt-2">
<svg
fill="none"
stroke="gray"
viewBox="0 0 24 24"
data-darkreader-inline-stroke=""
className="flex-shrink-0 w-6 h-6"
xmlns="http://www.w3.org/2000/svg"
>
<path
strokeLinecap="round"
strokeLinejoin="round"
strokeWidth="2"
d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
></path>
</svg>
<div className="space-y-0">
<p className="sm:text-sm md:text-lg lg:text-1xl xl:text-2xl text-sm font-semibold leading-snug capatilize tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
Views:{" "}
<span className="text-white/50 text-sm italic">
{urlResult._Views}
</span>
</p>
</div>
</div>
<div className="flex space-x-2 sm:space-x-4 pt-2">
<svg
fill="none"
stroke="gray"
viewBox="0 0 24 24"
data-darkreader-inline-stroke=""
className="flex-shrink-0 w-6 h-6"
xmlns="http://www.w3.org/2000/svg"
>
<path
strokeLinecap="round"
strokeLinejoin="round"
strokeWidth="2"
d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
></path>
</svg>
<div className="space-y-0">
<p className="sm:text-sm md:text-lg lg:text-1xl xl:text-2xl text-sm font-semibold leading-snug capatilize tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
upload Date:{" "}
<span className="text-white/50 text-sm italic">
{urlResult._Uploaded}
</span>
</p>
</div>
</div>
<div className="flex space-x-2 sm:space-x-4 pt-2">
<svg
fill="none"
stroke="gray"
viewBox="0 0 24 24"
data-darkreader-inline-stroke=""
className="flex-shrink-0 w-6 h-6"
xmlns="http://www.w3.org/2000/svg"
>
<path
strokeLinecap="round"
strokeLinejoin="round"
strokeWidth="2"
d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
></path>
</svg>
<div className="space-y-0">
<p className="sm:text-sm md:text-lg lg:text-1xl xl:text-2xl text-sm font-semibold leading-snug capatilize tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
Duration:{" "}
<span className="text-white/50 text-sm italic">
{urlResult._Duration}
</span>
</p>
</div>
</div>
<div className="flex space-x-2 sm:space-x-4 pt-2">
<svg
fill="none"
stroke="gray"
viewBox="0 0 24 24"
data-darkreader-inline-stroke=""
className="flex-shrink-0 w-6 h-6"
xmlns="http://www.w3.org/2000/svg"
>
<path
strokeLinecap="round"
strokeLinejoin="round"
strokeWidth="2"
d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
></path>
</svg>
<div className="space-y-0">
<p className="sm:text-sm md:text-lg lg:text-1xl xl:text-2xl text-sm font-semibold leading-snug capatilize tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
Author:{" "}
<span className="text-white/50 text-sm italic">
{urlResult._Author}
</span>
</p>
</div>
</div>
<div className="flex space-x-2 sm:space-x-4 pt-2">
<svg
fill="none"
stroke="gray"
viewBox="0 0 24 24"
data-darkreader-inline-stroke=""
className="flex-shrink-0 w-6 h-6"
xmlns="http://www.w3.org/2000/svg"
>
<path
strokeLinecap="round"
strokeLinejoin="round"
strokeWidth="2"
d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
></path>
</svg>
<div className="space-y-0">
<p className="sm:text-sm md:text-lg lg:text-1xl xl:text-2xl text-sm font-semibold leading-snug capatilize tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
Link:{" "}
<span className="text-white/50 text-sm italic">
{urlResult._Url}
</span>
</p>
</div>
</div>

<span className="label-text-alt font-bold text-yellow-400">
⚠️ Download wait time depends on video length.<br></br>💡 Be
patient best things takes time to happen.
</span>
<br></br>

{isLoadingVideo && isLoadingAudio ? null : (
<div className="navbar">
<div className="navbar-start">
<div className="dropdown pr-2">
<label
tabIndex={0}
className="btn btn-ghost bg-lime-900/50 text-xs"
>
<BsFillFileMusicFill />{" "}
<span className="text-xs ml-2">audio</span>
</label>
<ul
tabIndex={0}
className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-stone-900 border rounded-lg border-orange-800/50"
>
<li tabIndex={0}>
<a
className="italic"
href={`/api/audio?url=${urlResult._Url}&title=${urlResult._Title}&qaudio=${isAudioData}&format=Medium`}
>
Medium
</a>
<a
className="italic"
href={`/api/audio?url=${urlResult._Url}&title=${urlResult._Title}&qaudio=${isAudioData}&format=Medium`}
>
Low
</a>
<a
className="italic"
href={`/api/audio?url=${urlResult._Url}&title=${urlResult._Title}&qaudio=${isAudioData}&format=Medium`}
>
Lowest
</a>
</li>
</ul>
</div>
<br></br>

<div className="dropdown pr-3">
<label
tabIndex={0}
className="btn btn-ghost bg-lime-900/50 text-xs"
>
<BsFillCameraVideoFill />{" "}
<span className="text-xs ml-2">video</span>
</label>
<ul
tabIndex={0}
className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-stone-900 border rounded-lg border-orange-800/50"
>
<li tabIndex={0}>
{isVideoData._1080p !== undefined ? (
<a
className="italic"
href={`/api/video?url=${urlResult._Url}&title=${urlResult._Title}&qvideo=${isVideoData._1080p}&qaudio=${isAudioData}&format=1080p`}
>
1080p
</a>
) : (
<a className="italic">- 1080p </a>
)}

{isVideoData._720p !== undefined ? (
<a
className="italic"
href={`/api/video?url=${urlResult._Url}&title=${urlResult._Title}&qvideo=${isVideoData._720p}&qaudio=${isAudioData}&format=720p`}
>
720p
</a>
) : (
<a className="italic">- 720p </a>
)}

{isVideoData._480p !== undefined ? (
<a
className="italic"
href={`/api/video?url=${urlResult._Url}&title=${urlResult._Title}&qvideo=${isVideoData._480p}&qaudio=${isAudioData}&format=480p`}
>
480p
</a>
) : (
<a className="italic">- 480p </a>
)}

{isVideoData._360p !== undefined ? (
<a
className="italic"
href={`/api/video?url=${urlResult._Url}&title=${urlResult._Title}&qvideo=${isVideoData._360p}&qaudio=${isAudioData}&format=360p`}
>
360p
</a>
) : (
<a className="italic">- 360p </a>
)}

{isVideoData._240p !== undefined ? (
<a
className="italic"
href={`/api/video?url=${urlResult._Url}&title=${urlResult._Title}&qvideo=${isVideoData._240p}&qaudio=${isAudioData}&format=240p`}
>
240p
</a>
) : (
<a className="italic">- 240p </a>
)}

{isVideoData._144p !== undefined ? (
<a
className="italic"
href={`/api/video?url=${urlResult._Url}&title=${urlResult._Title}&qvideo=${isVideoData._144p}&qaudio=${isAudioData}&format=144p`}
>
144p
</a>
) : (
<a className="italic">- 144p </a>
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
<span className="text-xl  uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
Title:{" "}
</span>{" "}
{urlResult._Title}
</span>
<img
alt=""
src={urlResult._Thumbnail}
className="object-cover w-full h-56 rounded-2xl sm:h-96 pt-6"
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
id="hero-field"
name="hero-field"
ref={urlRef}
placeholder="required"
className="w-full rounded bg-stone-900 focus:ring-2 focus:ring-neutral-600 focus:bg-transparent focus:border-orange-500 text-base outline-none text-gray-100 px-2 transition-colors duration-200 ease-in-out"
></input>
{isLoading ? (
<button
disabled
type="button"
className="mt-2 text-white bg-orange-700 hover:bg-orange-800 focus:ring-1 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 inline-flex items-center"
>
<svg
aria-hidden="true"
role="status"
className="inline w-4 h-4 mr-3 text-white animate-spin"
viewBox="0 0 100 101"
fill="none"
xmlns="http://www.w3.org/2000/svg"
>
<path
d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
fill="#E5E7EB"
/>
<path
d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
fill="currentColor"
/>
</svg>
Converting...
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
