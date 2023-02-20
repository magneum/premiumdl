import React from "react";
import { useTypewriter } from "react-simple-typewriter";

function Footer() {
var [Lines, count] = useTypewriter({
words: ["bit.ly/premiumdl", "bit.ly/Premiumdl"],
loop: true,
delaySpeed: 2000,
});

var [Lines_, count_] = useTypewriter({
words: ["Youtube + Spotify Fremium downloder"],
loop: true,
delaySpeed: 2000,
});

return (
<footer className="bg-[#121112]" aria-labelledby="footer-heading">
<h2 id="footer-heading" className="sr-only">
Footer
</h2>

<div className="px-4 py-12 mx-auto bg-neutral-900 max-w-7xl sm:px-6 lg:px-16 rounded-lg">
<div className="flex flex-wrap items-baseline lg:justify-center">
<span className="mt-2 text-sm font-bold text-gray-500">
Copyright &copy; 2020 - {new Date().getFullYear()}
<a
href="https://wickedlabs.dev"
className="mx-2 text-red-500  hover:text-gray-500"
rel="noopener noreferrer"
>
@magneum
</a>
under MIT License
</span>
</div>
</div>
</footer>
);
}

export default Footer;
