"use client";

import React, { useState } from "react";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import TabsLink from "../../../components/TabsLink";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (result.success) {
        setStatus("Message sent successfully!");
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="dark:bg-slate-900 text-white min-h-screen">
      <Navbar />
      <TabsLink />

      <main className="p-4">
        <div className="bg-gray-800 p-8 rounded-lg  max-w-md mx-auto shadow-lg shadow-cyan-500/100">
          <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 text-cyan-500 rounded"
                required
              />
            </div>

            <div>
              <label className="block mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 text-cyan-500 rounded"
                required
              />
            </div>

            <div>
              <label className="block mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 text-cyan-500 rounded"
                rows="5"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-700 transition-transform transform hover:scale-105"
            >
              Send Message
            </button>
          </form>

          {status && <p className="mt-4">{status}</p>}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
