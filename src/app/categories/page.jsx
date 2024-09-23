"use client"; // Add this line

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../../../components/Footer";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../../components/Navbar";
import TabsLink from "../../../components/TabsLink";

const allCategories = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="dark:bg-slate-900 text-white min-h-screen">
      <Navbar />

      <TabsLink />

      <main className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">All Categories</h2>
        </div>

        <style>
          {`
          @media (max-width: 768px) {
            .video-grid {
                margin-left: 0; /* mx-0 */
                margin-right: 0; /* mx-0 */
            }
            .titles{
              font-size: 8px;
            }
          }
        `}
        </style>

        <div className="grid grid-cols-2 video-grid md:grid-cols-2 lg:grid-cols-4 gap-4 mx-20 transition">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => {
            const [isDropdownOpen, setIsDropdownOpen] = useState(false);

            const toggleDropdown = (e) => {
              e.stopPropagation(); // Prevent click events from bubbling up
              setIsDropdownOpen((prev) => !prev);
            };

            return (
              <div
                key={i}
                className="bg-gray-800 rounded overflow-hidden shadow-lg shadow-cyan-500/50 transition-transform transform hover:scale-105 relative group m-4 mx-0"
              >
                <img
                  src="/images.jpg"
                  alt={`Video ${i}`}
                  className="w-full h-40 object-cover"
                />

                <div className="p-2">
                  <h3 className="font-bold justify-center titles items-center text-cyan-500 truncate max-w-sm ml-1 transition-transform transform hover:scale-105">
                    Video Title {i}
                  </h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <div className="absolute bottom-2 right-2  titles shadow-lg shadow-cyan-500/100 bg-gray-700 text-white text-xs font-bold px-2 py-1 rounded">
                      {i % 2 === 0 ? "1 Videos" : "30 Videos"}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default allCategories;
