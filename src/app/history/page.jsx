"use client"; // Add this line

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../../../components/Footer";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../../components/Navbar";
import TabsLink from "../../../components/TabsLink";

const HistoryhPage = () => {
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
          <h2 className="text-xl font-bold">Your History</h2>
          <button className="btn bg-cyan-500 text-white shadow-lg shadow-cyan-500/100 transition-transform transform hover:scale-105  hover:bg-cyan-800">
            Remove All
          </button>
        </div>

        <style>
          {`
          @media (max-width: 768px) {
            .video-grid {
                margin-left: 0; /* mx-0 */
                margin-right: 0; /* mx-0 */
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
                {/* Resolution Badge */}
                <div className="absolute top-2 left-2 shadow-lg shadow-cyan-500/100 bg-cyan-600 text-white text-xs font-bold px-2 py-1 rounded">
                  {i % 2 === 0 ? "4K" : "1080p"}
                </div>
                {/* Duration Badge */}
                <div className="absolute bottom-2 right-2 shadow-lg shadow-cyan-500/100 bg-gray-700 text-white text-xs font-bold px-2 py-1 rounded">
                  {i % 2 === 0 ? "1 hour" : "30 min"}
                </div>

                {/* Three Dots Menu */}
                <div
                  className="absolute top-2 right-2 cursor-pointer text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={toggleDropdown}
                >
                  <span className="text-xl">•••</span>
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 bg-gray-700 text-white text-sm rounded shadow-lg z-10">
                      <button
                        className="block px-4 py-2 hover:bg-gray-600"
                        onClick={() => {
                          alert("Added to Watch Later!");
                          setIsDropdownOpen(false); // Close dropdown after action
                        }}
                      >
                        Watch Later
                      </button>
                      <button
                        className="block px-4 py-2 hover:bg-gray-600"
                        onClick={() => {
                          alert("Added to Watch Later!");
                          setIsDropdownOpen(false); // Close dropdown after action
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  )}
                </div>

                <div className="p-2">
                  <h3 className="font-bold text-cyan-400 truncate w-full transition-transform transform hover:scale-105">
                    Video Title {i}
                  </h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    {/* Avatar and Admin */}
                    <div className="flex items-center space-x-1">
                      <img
                        height="25px"
                        width="25px"
                        src="/avatar.png"
                        alt="Admin Avatar"
                        className="transition-transform transform hover:scale-105"
                      />
                      <span className="truncate ml-1 w-36">Admin</span>
                    </div>

                    {/* View count and eye icon */}
                    <div className="flex items-center space-x-1">
                      <span>1.4M</span>
                      <FontAwesomeIcon icon={faEye} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center items-center mt-8">
          <nav aria-label="Page navigation">
            <ul className="inline-flex -space-x-px text-sm shadow-lg shadow-cyan-500/50">
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-cyan-500 hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-cyan-500 dark:hover:text-white"
                >
                  Previous
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-cyan-500 hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-cyan-500 dark:hover:text-white"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-cyan-500 hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-cyan-500 dark:hover:text-white"
                >
                  2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-current="page"
                  className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-cyan-500 hover:text-white dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-cyan-500 hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-cyan-500 dark:hover:text-white"
                >
                  4
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-cyan-500 hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-cyan-500 dark:hover:text-white"
                >
                  5
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-cyan-500 hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-cyan-500 dark:hover:text-white"
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HistoryhPage;
