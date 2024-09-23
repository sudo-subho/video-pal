"use client"; // Add this line

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faShare,
  faDownload,
  faEye,
  faClock,
  faBug,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../../components/Navbar";
import TabsLink from "../../../components/TabsLink";
import Footer from "../../../components/Footer";
import { Button } from "@mui/material";

const VideoPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="dark:bg-slate-900 text-white min-h-screen">
      <Navbar />

      <TabsLink />
      {/* Main Layout */}
      <div className="flex flex-col md:flex-row">
        {/* Video Section */}
        <div className="flex-grow max-w-[90%] mx-4 md:mx-20 me-4">
          <ul className="flex flex-wrap space-x-2 mb-4">
            {["Songs", "Hindi Songs", "Pop"].map((tag, index) => (
              <li key={index}>
                <a
                  href={`/tags/${tag.toLowerCase().replace(/\s/g, "-")}`}
                  className="inline-block bg-cyan-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg shadow-cyan-500/100 hover:bg-cyan-700 transition-colors"
                >
                  {tag}
                </a>
              </li>
            ))}
          </ul>

          <source
            src="https://drive.google.com/uc?export=download&id=YOUR_VIDEO_ID"
            type="video/mp4"
          />

          <div className="relative">
            <video
              className="w-full h-[300px] md:h-[500px] shadow-lg shadow-cyan-500/100 rounded-lg"
              controls
              onError={(e) => console.error("Video error:", e)}
            >
              <source
                src="https://drive.google.com/uc?export=download&id=1XWTVgblqfzfte678rV1UbP_cyto84tZA"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          <style>
            {`
            .ytp-mobile-a11y-hidden-seek-button {
                display: none !important;
            }

          @media (max-width: 768px) {
            .video-grid {
                margin-left: 0; /* mx-0 */
                margin-right: 0; /* mx-0 */
            }
            .tools{
              margin-bottom: 10px;
            }

          }
        `}
          </style>

          {/* Video Details */}
          <div className="flex flex-col md:flex-row items-center">
            <h1 className="text-xl md:text-2xl font-bold mt-4 text-cyan-500 truncate max-w-3xl ml-1">
              HIGH HEELS OFFICIAL VIDEO - JAZ DHAMI FT YO YO
            </h1>
            <div className="flex flex-wrap items-end mt-2 md:mt-0">
              <span className="shadow-lg shadow-cyan-500/100 bg-cyan-600 text-white text-xs font-bold px-2 py-1 rounded ml-2 hover:transition-transform transform hover:scale-105">
                1080
              </span>
              <span className="shadow-lg shadow-cyan-500/100 bg-cyan-600 text-white text-xs font-bold px-2 py-1 rounded mx-4 hover:transition-transform transform hover:scale-105">
                1 hour
              </span>
            </div>
          </div>

          <div className="flex flex-wrap tools justify-between items-center mt-2">
            <div className="flex items-center space-x-2 hover:transition-transform transform hover:scale-105">
              <img
                src="/avatar.png"
                alt="Jaz Dhami"
                className="h-10 w-10 rounded-full shadow-lg shadow-cyan-500/100"
              />
              <span className="text-lg hover:text-cyan-500">Jaz Dhami</span>
            </div>
            <div className="flex flex-wrap items-center space-x-4 mt-2 md:mt-0">
              {[
                { icon: faThumbsUp, label: "2.2M" },
                { icon: faShare, label: "Share" },
                { icon: faDownload, label: "Download" },
                { icon: faEye, label: "2.4M" },
                { icon: faClock, label: "Watch later" },
                { icon: faBug, label: "Report" },
              ].map(({ icon, label }, index) => (
                <div
                  key={index}
                  className="flex space-x-2 items-center hover:transition-transform transform hover:scale-105 group"
                >
                  <FontAwesomeIcon
                    icon={icon}
                    className="text-white group-hover:text-cyan-500"
                  />
                  <span className="text-white group-hover:text-cyan-500">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ad Section */}
        <div className="w-full md:w-[30%] bg-gray-900 p-5">
          <h2 className="text-xl font-bold text-white mb-4">Ads</h2>

          {/* Example Ad Placeholder */}
          <div className="bg-gray-700 h-32 w-full mb-4 flex items-center justify-center text-white">
            Ad Placeholder 1
          </div>

          {/* Another Ad Placeholder */}
          <div className="bg-gray-700 h-32 w-full mb-4 flex items-center justify-center text-white">
            Ad Placeholder 2
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mb-4 my-8 mx-4 md:mx-20">
        <h2 className="text-xl font-bold">Related Videos</h2>
      </div>

      <div className="grid grid-cols-2 video-grid md:grid-cols-2 lg:grid-cols-4  mx-20 transition">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
          <div
            key={i}
            className="bg-gray-800 rounded overflow-hidden shadow-lg shadow-cyan-500/50 transition-transform transform hover:scale-105 relative group m-2"
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
        ))}
      </div>
      <div className="flex justify-center items-center mt-8">
        <Button className="btn text-white shadow-lg shadow-cyan-500/100 hover:bg-cyan-500 transition-transform transform hover:scale-105">
          Load More
        </Button>
      </div>

      <Footer />
    </div>
  );
};

export default VideoPage;
