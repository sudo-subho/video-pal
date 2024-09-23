import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faTv,
  faList,
  faGamepad,
  faCrown,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";

const TabsLink = () => {
  const allCategories = [
    "gamming",
    "Educational",
    "New Video",
    "Ai Videos",
    "All Categories",
  ];

  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [visibleCategoryCount, setVisibleCategoryCount] = useState(10);

  const toggleCategoryDropdown = () => {
    setIsCategoryOpen((prev) => !prev);
  };

  const handleShowMoreCategories = () => {
    setVisibleCategoryCount((prev) => prev + 10);
  };

  return (
    <>
      {/* For mobile screens, use grid layout. For larger screens, keep the current flexbox layout */}
      <nav className="flex flex-wrap sm:grid sm:grid-cols-2 lg:flex justify-center m-8 items-center space-x-4 p-4 mb-8">
        <a
          href="#"
          className="flex items-center space-x-1 shadow-lg shadow-cyan-500/50 transition-transform transform hover:scale-105"
        >
          <FontAwesomeIcon icon={faVideo} className="text-cyan-500" />
          <span>Videos</span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-1 shadow-lg shadow-cyan-500/50 transition-transform transform hover:scale-105"
        >
          <FontAwesomeIcon icon={faTv} className="text-cyan-500" />
          <span>Channels</span>
        </a>

        {/* Category Dropdown */}
        <div className="relative">
          <a
            href="#"
            onClick={toggleCategoryDropdown}
            className="flex items-center space-x-1 shadow-lg shadow-cyan-500/50 transition-transform transform hover:scale-105"
          >
            <FontAwesomeIcon icon={faList} className="text-cyan-500" />
            <span>Category</span>
          </a>

          {isCategoryOpen && (
            <div className="absolute z-10 mt-1 bg-gray-800 text-white shadow-lg rounded-lg overflow-hidden max-h-60 w-48">
              <ul className="py-2 overflow-y-auto">
                {allCategories
                  .slice(0, visibleCategoryCount)
                  .map((category, index) => (
                    <li key={index}>
                      <a
                        href={`/categories/`}
                        className="block px-4 py-2 hover:bg-cyan-600"
                      >
                        {category}
                      </a>
                    </li>
                  ))}
              </ul>
              {visibleCategoryCount < allCategories.length && (
                <button
                  onClick={handleShowMoreCategories}
                  className="w-full bg-cyan-500 text-white text-center py-2 hover:bg-cyan-600 transition-colors"
                >
                  All Categories
                </button>
              )}
            </div>
          )}
        </div>

        {/* Pro Videos */}
        <div className="relative transition-transform transform hover:scale-105">
          <a
            href="#"
            className="flex items-center space-x-1 shadow-lg shadow-cyan-500/50"
          >
            <FontAwesomeIcon icon={faVideo} className="text-cyan-500" />
            <span>Pro Videos</span>
          </a>
          <FontAwesomeIcon
            icon={faCrown}
            className="absolute top-0 right-0 text-yellow-400 text-xs transform translate-x-1/2 -translate-y-1/2"
          />
        </div>

        {/* Games */}
        <div className="relative transition-transform transform hover:scale-105">
          <a
            href="/games"
            className="flex items-center space-x-1 shadow-lg shadow-cyan-500/50"
          >
            <FontAwesomeIcon icon={faGamepad} className="text-cyan-500" />
            <span>Games</span>
          </a>
          <FontAwesomeIcon
            icon={faCrown}
            className="absolute top-0 right-0 text-yellow-400 text-xs transform translate-x-1/2 -translate-y-1/2"
          />
        </div>

        {/* AI Video */}
        <div className="relative transition-transform transform hover:scale-105">
          <a
            href="/ai_video"
            className="flex items-center space-x-1 shadow-lg shadow-cyan-500/50"
          >
            <FontAwesomeIcon icon={faRobot} className="text-cyan-500" />
            <span>AI Video</span>
          </a>
          <FontAwesomeIcon
            icon={faCrown}
            className="absolute top-0 right-0 text-yellow-400 text-xs transform translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </nav>
    </>
  );
};

export default TabsLink;
