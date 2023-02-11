import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { SocialIcon } from "react-social-icons";

function Header() {
  const [seconds, setSeconds] = useState(0);
  const _color = [
    "hue-rotate-15",
    "hue-rotate-30",
    "hue-rotate-60",
    "hue-rotate-90",
    "hue-rotate-180",
  ];
  var _colorI = _color[Math.floor(Math.random() * _color.length)];
  return (
    <header className="sticky top-0 p-5 flex items-center justify-center max-w-7xl mx-auto bg-neutral-900 rounded-t rounded-xl">
      <img
        className={` h-14 w-full rounded-lg ${_colorI}`}
        alt="hero"
        src="https://music.school/templates/school/images/dist/Sound_wave_preloader.gif"
      ></img>
      <motion.div
        initial={{ x: -200, opacity: 0, scale: 1 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://www.github.com"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.spotify.com"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.youtube.com"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
    </header>
  );
}

export default Header;
