import React from "react";

const Footer = () => {
  return (
    <footer
      className="dark:bg-slate-950 text-white py-4 px-4"
      style={{ marginTop: "10%" }}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center mb-4 md:mb-0">
          <img src="/logos.png" alt="Site Logo" className="h-6 w-auto mr-2" />
          <span className="font-bold text-lg text-cyan-500">Video Pal</span>
        </div>

        {/* Links section: Grid layout on mobile, flex on larger screens */}
        <div className="grid grid-cols-2 gap-2 md:flex md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          {[
            "About",
            "Contact",
            "Content Removal",
            "DMCA",
            "Content Creator",
          ].map((text) => (
            <a
              href={`/${text.toLowerCase().replace(/\s+/g, "-")}`} // Adjust href if necessary
              className="hover:text-cyan-500  duration-300 transition-transform transform hover:scale-105"
              key={text}
            >
              {text}
            </a>
          ))}
        </div>
      </div>

      {/* Footer text */}
      <div className="text-center mt-4">
        <span>© {new Date().getFullYear()} Porn Pal. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
