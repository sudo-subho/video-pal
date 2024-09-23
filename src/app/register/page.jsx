"use client"; // Add this line

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import TabsLink from "../../../components/TabsLink";
import { useRouter } from "next/navigation";
import { auth } from "../../../utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth"; // Import Firebase auth
import { db } from "../../../utils/firebase"; // Import Firestore
import { doc, setDoc } from "firebase/firestore"; // Import Firestore functions

const RegisterPage = () => {
  const router = useRouter(); // Initialize useRouter
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [status, setStatus] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Registering...");

    // Simple password match validation
    if (formData.password !== formData.confirmPassword) {
      setStatus("Passwords do not match.");
      return;
    }

    try {
      // Register user with Firebase
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      const user = userCredential.user;

      // Store the user's name and email in Firestore
      await setDoc(doc(db, "users", user.uid), {
        name: formData.name,
        email: user.email,
      });

      setStatus("Registration successful!");
      router.push("/"); // Redirect to home page or another page if needed
    } catch (error) {
      setStatus("Registration failed: " + error.message); // Show error message
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="dark:bg-slate-900 text-white min-h-screen">
      <Navbar />
      <TabsLink />

      <main className="p-8 flex flex-col items-center justify-center">
        <div className="w-full max-w-md bg-slate-800 p-6 rounded-lg shadow-lg shadow-cyan-500/100">
          <h2 className="text-2xl font-bold mb-4 text-cyan-500 text-center">
            Register
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 rounded bg-slate-700 text-white focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                required
              />
            </div>

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

            <div>
              <label
                htmlFor="confirmPassword"
                className="block mb-1 text-gray-300"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-slate-700 text-white focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                  required
                />
                <button
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400 focus:outline-none"
                >
                  <FontAwesomeIcon
                    icon={showConfirmPassword ? faEyeSlash : faEye}
                  />
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 transition-transform transform hover:scale-105 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-lg shadow-cyan-500/50"
            >
              Register
            </button>
          </form>

          {status && (
            <p className="mt-4 text-center text-sm text-red-500">{status}</p> // Change text color to red for errors
          )}

          <div className="mt-6 text-center">
            <p className="text-gray-400">Already have an account?</p>
            <a href="/login" className="text-cyan-500 hover:underline mt-2">
              Log in here
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RegisterPage;
