import Link from "next/link";
import React from "react";

function test() {
  return (
    <div className="navbar rounded-xl bg-slate-900 border-stone-800 border hover:bg-stone-900 hover:border-cyan-600">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="cyan"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-stone-900 rounded-box w-52"
          >
            <li tabIndex={0}>
              <a className="justify-between text-amber-400">
                api/animation
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-stone-900 text-amber-200">
                <li>
                  <Link
                    href="https://magneum.vercel.app/api/animation?q=bite"
                    className="text-xs text-yellow-200"
                  >
                    ?q=bite
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://magneum.vercel.app/api/animation?q=confused"
                    className="text-xs text-yellow-200"
                  >
                    ?q=confused
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://magneum.vercel.app/api/animation?q=goodnight"
                    className="text-xs text-yellow-200"
                  >
                    ?q=goodnight
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://magneum.vercel.app/api/animation?q=happy"
                    className="text-xs text-yellow-200"
                  >
                    ?q=happy
                  </Link>
                </li>
              </ul>
            </li>
            {/* ================================================================================= */}
          </ul>
        </div>
        <a className="text-xl font-serif text-white">Drop Down Menu</a>
      </div>
    </div>
  );
}

export default test;
