"use client";

import React, { useState } from "react";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import TabsLink from "../../../components/TabsLink";

const GamePage = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add logic here to send the email to your server or email service
    setSubmitted(true);
  };

  return (
    <div className="dark:bg-slate-900 text-white min-h-screen">
      <Navbar />
      <TabsLink />

      <main className="p-8 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-6 text-cyan-500">Adult Games</h1>
        <p className="text-lg mb-4 text-center">
          Discover the latest adult games and entertainment on Porn Pal. Our
          premium content is coming soon. Stay tuned!
        </p>

        <div className="w-full max-w-md">
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="bg-slate-800 p-6 rounded-lg shadow-lg"
            >
              <label
                className="block text-cyan-500 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Get Notified When Premium Games are Available
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
                className="w-full p-2 mb-4 text-black rounded"
              />
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline shadow-lg shadow-cyan-500/50"
                >
                  Notify Me
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center p-6 bg-slate-800 rounded-lg shadow-lg">
              <p className="text-cyan-500">
                Thank you! We will notify you once premium games are available.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GamePage;
