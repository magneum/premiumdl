import React from "react";
import { useTypewriter } from "react-simple-typewriter";

function Footer() {
var [Lines, count] = useTypewriter({
words: ["@magneum", "bit.ly/magneum"],
loop: true,
delaySpeed: 1000,
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
href="https://bit.ly/magneum"
className="mx-2 text-red-500 hover:text-red-800 text-lg"
rel="noopener noreferrer"
>
{Lines}
</a>
under MIT License
</span>
</div>
</div>
</footer>
);
}

export default Footer;
