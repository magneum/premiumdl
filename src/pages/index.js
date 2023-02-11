import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { saveAs } from "file-saver";
import { useRef, useState } from "react";

export default function Home() {
  const inputUrlRef = useRef();
  const [isLoading, setLoading] = useState(false);
  const [urlResult, setUrlResult] = useState("");
  const [musicResult, setMusicResult] = useState("");

  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    const _data = await axios.get("/api/search?q=" + inputUrlRef.current.value);
    // const _mdata = await axios.get("/api/music?q=" + _data.data._url);
    // setMusicResult(_mdata.data);
    console.log(_data.data);
    setUrlResult(_data.data);
    setLoading(false);
  };

  return (
    <div>
      <Head>
        <title>Prodl</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <main>
        <section className="bg-neutral-900 dark:bg-gray-900">
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                  bit.ly/Prodl
                </span>
              </h1>
              <h2 className="mb-4 text-3xl tracking-tight font-semibold text-transparent bg-clip-text bg-gradient-to-b to-emerald-600 from-sky-400">
                ~by magneum
              </h2>

              <p className="mb-2 text-transparent bg-clip-text bg-gradient-to-r to-gray-400 from-white">
                - PRODL allows you to convert & download video and audio from
                YouTube, Spotify in HD quality. Available formats are .mp3 .mp4
              </p>
              <p className="mb-2 text-transparent bg-clip-text bg-gradient-to-r to-gray-400 from-white">
                - You can easily download for free thousands of videos from
                YouTube and other websites.
              </p>
              <p className="mb-10   text-transparent bg-clip-text bg-gradient-to-r to-gray-400 from-white">
                - Once the required video url or song name is provided, all the
                meta informations are shown in the page.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <img
                alt="office content 1"
                className="w-full rounded-lg animate-pulse"
                src="https://i.pinimg.com/564x/09/e5/b1/09e5b19004af054246fc595159ce3649.jpg"
              ></img>
              <img
                alt="office content 2"
                className="mt-4 w-full lg:mt-10 rounded-lg animate-pulse"
                src="https://w0.peakpx.com/wallpaper/1015/585/HD-wallpaper-spotify-app-black-green-logo-logos-music-spotify-music-streaming-thumbnail.jpg"
              ></img>
            </div>
          </div>
        </section>
      </main>
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className="flex flex-col w-full border-opacity-50 bg-gradient-to-t from-stone-900 via-zinc-900 to-stone-900">
        <div className="divider text-emerald-900 text-3xl"> X </div>
      </div>
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {urlResult ? (
        <section className="bg-[#222020]">
          <div className="container flex flex-col-reverse mx-auto lg:flex-row">
            <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:bg-violet-400 dark:text-gray-900">
              <div className="flex space-x-2 sm:space-x-4">
                <svg
                  fill="none"
                  stroke="cyan"
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
                  <p className="text-lg font-semibold leading-snug capatilize tracking-wide text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                    Video Title:
                  </p>
                  <p className="leading-snug italic">{urlResult._title}</p>
                </div>
              </div>

              <div className="flex space-x-2 sm:space-x-4">
                <svg
                  fill="none"
                  stroke="cyan"
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
                  <p className="text-lg font-semibold leading-snug capatilize tracking-wide text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                    Description:
                  </p>
                  <p className="leading-snug italic">
                    {urlResult._description}
                  </p>
                </div>
              </div>

              <div className="flex space-x-2 sm:space-x-4">
                <svg
                  fill="none"
                  stroke="cyan"
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
                  <p className="text-lg font-semibold leading-snug capatilize tracking-wide text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                    YouTube Video Id:
                  </p>
                  <p className="leading-snug italic">{urlResult._videoId}</p>
                </div>
              </div>

              <div className="flex space-x-2 sm:space-x-4">
                <svg
                  fill="none"
                  stroke="cyan"
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
                  <p className="text-lg font-semibold leading-snug capatilize tracking-wide text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                    Upload date:
                  </p>
                  <p className="leading-snug italic">{urlResult._uploaded}</p>
                </div>
              </div>

              <div className="flex space-x-2 sm:space-x-4">
                <svg
                  fill="none"
                  stroke="cyan"
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
                  <p className="text-lg font-semibold leading-snug capatilize tracking-wide text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                    Views Counter:
                  </p>
                  <p className="leading-snug italic">{urlResult._views}</p>
                </div>
              </div>

              <div className="flex space-x-2 sm:space-x-4">
                <svg
                  fill="none"
                  stroke="cyan"
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
                  <p className="text-lg font-semibold leading-snug capatilize tracking-wide text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                    Author name:
                  </p>
                  <p className="leading-snug italic">{urlResult._author}</p>
                </div>
              </div>

              <div className="flex space-x-2 sm:space-x-4">
                <svg
                  fill="none"
                  stroke="cyan"
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
                  <p className="text-lg font-semibold leading-snug capatilize tracking-wide text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                    Thumbnail Link:
                  </p>
                  <p className="leading-snug italic">{urlResult._thumbnail}</p>
                </div>
              </div>

              <div className="flex space-x-2 sm:space-x-4">
                <svg
                  fill="none"
                  stroke="cyan"
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
                  <p className="text-lg font-semibold leading-snug capatilize tracking-wide text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                    YouTube Link:
                  </p>
                  <p className="leading-snug italic">{urlResult._url}</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-800">
              <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                <img
                  alt=""
                  src={urlResult._thumbnail}
                  className="rounded-2xl dark:bg-gray-500 aspect-video sm:min-h-96 mt-16 border-2 border-gray-400 shadow-md shadow-gray-600"
                />
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="bg-[#1c1b1b]">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full">
              <img
                alt="hero"
                className="object-cover object-center rounded pr-8"
                src="https://i.pinimg.com/originals/f8/8a/ca/f88acab7ffd127b4465659500aa0538f.gif"
              ></img>
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-4xl mb-4 font-bold text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-orange-400 from-red-600">
                  YouTube
                </span>{" "}
                Downloader
              </h1>
              <p className="mb-8 leading-relaxed">
                YouTube is a global online video sharing and social media
                platform headquartered in San Bruno, California. It was launched
                on February 14, 2005, by Steve Chen, Chad Hurley, and Jawed
                Karim. It is owned by Google, and is the second most visited
                website, after Google Search.
              </p>
              <div className="flex w-full md:justify-start justify-center items-end">
                <div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
                  <form onSubmit={handleSubmit}>
                    <input
                      required
                      type="text"
                      id="hero-field"
                      name="hero-field"
                      ref={inputUrlRef}
                      placeholder="YouTube url or Song name..."
                      className="w-full bg-gray-800 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-neutral-600 focus:bg-transparent focus:border-emerald-500 text-base outline-none text-gray-100 py-1 px-2 leading-8 transition-colors duration-200 ease-in-out"
                    ></input>

                    {isLoading ? (
                      <button
                        disabled
                        type="button"
                        className="mt-2 text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-1 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800 inline-flex items-center"
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
                        Loading...
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
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className="flex flex-col w-full border-opacity-50 bg-gradient-to-t from-stone-900 via-zinc-900 to-stone-900">
        <div className="divider text-emerald-900 text-3xl"> X </div>
      </div>
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <footer className="footer p-10 bg-neutral-900 text-neutral-content">
        <div>
          <p>
            Copyright &copy; {new Date().getFullYear()} to magneum
            <br />
            under MIT License
          </p>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
