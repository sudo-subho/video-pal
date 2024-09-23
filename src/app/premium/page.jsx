"use client";

import React, { useState } from "react";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import TabsLink from "../../../components/TabsLink";

const PremiumPage = () => {
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
        <h1 className="text-4xl font-bold mb-6 text-cyan-500">
          Premium Features
        </h1>
        <p className="text-lg leading-7 mb-4 text-center">
          We're working hard to bring you amazing premium features at Porn Pal.
          Stay tuned for exclusive content, AI-generated adult experiences, and
          more!
        </p>
        <p className="text-lg leading-7 mb-4 text-center">
          Premium isn't ready yet, but we'd love to keep you updated. Drop your
          email below, and we’ll notify you as soon as it's available!
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="w-full max-w-md">
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="email">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className=" appearance-none border text-cyan-500 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline shadow-lg shadow-cyan-500/100"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 items-center px-4 rounded focus:outline-none focus:shadow-outline shadow-lg shadow-cyan-500/50"
              >
                Notify Me
              </button>
            </div>
          </form>
        ) : (
          <p className="text-green-400 mt-4">
            Thank you! We'll notify you when premium features are ready.
          </p>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default PremiumPage;
