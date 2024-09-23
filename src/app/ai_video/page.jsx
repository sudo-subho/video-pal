"use client";

import React, { useState } from "react";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import TabsLink from "../../../components/TabsLink";

const AIPornPage = () => {
  const [prompt, setPrompt] = useState("");
  const [images, setImages] = useState([
    "/public-image1.jpg", // Placeholder for public image URLs
    "/public-image2.jpg",
    "/public-image3.jpg",
    "/public-image4.jpg",
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // No logic here yet, just the UI
  };

  return (
    <div className="dark:bg-slate-900 text-white min-h-screen">
      <Navbar />
      <TabsLink />

      <main className="p-8 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-6 text-cyan-500">AI Porn</h1>
        <p className="text-lg mb-4 text-center">
          Generate adult content with AI. Enter your prompt below and see the
          results.
        </p>

        <div className="w-full max-w-lg">
          <form
            onSubmit={handleSubmit}
            className="bg-slate-800 p-6 rounded-lg  mb-6 shadow-lg shadow-cyan-500/100"
          >
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="prompt"
            >
              Enter Prompt
            </label>
            <textarea
              id="prompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              required
              placeholder="Describe the content you'd like to generate..."
              className="w-full p-4 mb-4 rounded resize-none h-24 text-cyan-500"
            />
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline shadow-lg shadow-cyan-500/50"
              >
                Generate
              </button>
            </div>
          </form>
        </div>

        <h2 className="text-2xl font-bold mb-4 text-cyan-500">Public Images</h2>
        <div className="grid grid-cols-2 gap-4 w-96">
          {images.map((image, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={image}
                alt={`Public Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="bg-slate-800 p-4 rounded-lg shadow-lg text-center my-8">
          <h3 className="text-xl font-bold text-cyan-500 mb-2">
            AI Porn Video Generation Coming Soon!
          </h3>
          <p className="text-gray-400">
            Stay tuned for the next update where you'll be able to generate
            adult videos using AI. Check back later for new features!
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AIPornPage;
