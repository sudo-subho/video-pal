"use client";

import React from "react";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import TabsLink from "../../../components/TabsLink";

const AboutPage = () => {
  return (
    <div className="dark:bg-slate-900 text-white min-h-screen">
      <Navbar />
      <TabsLink />

      <style>
        {`
          @media (max-width: 768px) {
            .texty {
                margin-left: 0; /* mx-0 */
                margin-right: 0; /* mx-0 */
            }
          }
        `}
      </style>

      <main className="p-8 mx-20 texty">
        <h1 className="text-4xl font-bold mb-6 text-cyan-500">About us</h1>
        <p className="text-lg leading-7 mb-4">
          Welcome to <span className="font-bold">Porn Pal</span>, your go-to
          platform for high-quality adult entertainment. We offer an extensive
          collection of videos in various categories, including the latest in
          AI-generated adult content.
        </p>
        <p className="text-lg leading-7 mb-4">
          At Porn Pal, we believe in providing a seamless and free experience
          for users who want to explore their interests in adult content.
          Whether you're into classic categories, innovative AI Porn, or even
          adult games, we’ve got something for everyone.
        </p>
        <p className="text-lg leading-7 mb-4">
          Our adult game section offers a diverse range of interactive
          experiences, perfect for those who want to take their adult
          entertainment to the next level. Enjoy immersive gameplay and explore
          unique scenarios in our collection of games.
        </p>
        <p className="text-lg leading-7 mb-4">
          Our platform is designed with user-friendliness and privacy in mind,
          ensuring that your experience on Porn Pal is both enjoyable and
          secure. Stay tuned for more exciting features as we continue to evolve
          and expand our offerings.
        </p>
        <p className="text-lg leading-7 mb-4">Explore, discover, and enjoy!</p>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
