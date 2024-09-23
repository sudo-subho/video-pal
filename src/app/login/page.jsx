// src/app/login/page.jsx
"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../utils/firebase"; // Adjust the path as necessary
import { db } from "../../../utils/firebase"; // Import Firestore
import { doc, getDoc, setDoc } from "firebase/firestore"; // Import Firestore functions
import ReCAPTCHA from "react-google-recaptcha";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import TabsLink from "../../../components/TabsLink";

const LoginPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [status, setStatus] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!recaptchaToken) {
      setStatus("Please complete the reCAPTCHA.");
      return;
    }
    setStatus("Logging in...");

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = userCredential.user;

      // Retrieve the user's name from Firestore or add it if it doesn't exist
      const userDoc = doc(db, "users", user.uid);
      const userSnapshot = await getDoc(userDoc);

      if (!userSnapshot.exists()) {
        // If the user does not exist in Firestore, create a new document
        await setDoc(userDoc, {
          name: formData.name, // Include name if it's available
          email: user.email,
          // Add any other fields you want to store
        });
      }

      setStatus("Login successful!");
      router.push("/"); // Redirect to home page
    } catch (error) {
      setStatus("Login failed, please try again.");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };

  return (
    <div className="dark:bg-slate-900 text-white min-h-screen">
      <Navbar />
      <TabsLink />

      <main className="p-8 flex flex-col items-center justify-center">
        <div className="w-full max-w-md bg-slate-800 p-6 rounded-lg shadow-lg shadow-cyan-500/100">
          <h2 className="text-2xl font-bold mb-4 text-cyan-500 text-center">
            Login
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-1 text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 rounded bg-slate-700 text-white focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block mb-1 text-gray-300">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-slate-700 text-white focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400 focus:outline-none"
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </button>
              </div>
            </div>

            <ReCAPTCHA
              sitekey="6Lf8UToqAAAAAAOce2wMpnh4PTjmHn5cSUhT4x-D" // Replace with your site key
              onChange={onRecaptchaChange}
            />

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 transition-transform transform hover:scale-105 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-lg shadow-cyan-500/50"
            >
              Login
            </button>
          </form>

          {status && (
            <p
              className={`mt-4 text-center text-sm ${
                status.includes("failed") ? "text-red-500" : "text-gray-300"
              }`}
            >
              {status}
            </p>
          )}

          <div className="mt-6 text-center">
            <p className="text-gray-400">Don't have an account?</p>
            <a href="/register" className="text-cyan-500 hover:underline mt-2">
              Sign up here
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LoginPage;
