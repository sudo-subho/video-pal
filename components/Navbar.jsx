"use client";

import React, { useState, useMemo } from "react";
import { FaTransgenderAlt, FaMale, FaFemale } from "react-icons/fa";
import Select from "react-select";
import countryList from "react-select-country-list";
import CountryFlag from "react-country-flag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faCrown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const options = useMemo(
    () =>
      countryList()
        .getData()
        .map((country) => ({
          value: country.value,
          label: country.label,
          flag: <CountryFlag countryCode={country.value} svg />,
        })),
    []
  );

  const [selectedCountry, setSelectedCountry] = useState(options[2]);

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };

  const genderOptions = [
    { label: "Trans", icon: <FaTransgenderAlt /> },
    { label: "Gay", icon: <FaMale /> },
    { label: "Straight", icon: <FaFemale /> },
  ];

  const [selectedGender, setSelectedGender] = useState(genderOptions[2]); // State to track selected gender

  return (
    <header className="flex items-center justify-between p-4 border-b dark:bg-slate-950 border-gray-700">
      <div className="flex items-center space-x-4">
        <div className="w-8 h-8">
          <img
            className="shadow-sm shadow-cyan-400/10"
            src="/logos.png"
            alt="Logo"
          ></img>
        </div>
        <nav className="space-x-4 mx-4">
          <a
            href="/"
            className="font-black italic text-xl drop-shadow-lg shadow-lg shadow-cyan-500/20 text-cyan-500"
            style={{ fontWeight: "bold" }}
          >
            Video <span>Pal</span>
          </a>
          {/*
          <div className="dropdown dropdown-bottom">
            Button with fixed width 
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 w-38 flex items-center justify-between transition-transform transform hover:scale-105"
            >
              {selectedGender ? (
                <>
                  {selectedGender.icon}{" "}
                  <span className="ml-2">{selectedGender.label}</span>
                </>
              ) : (
                "Click"
              )}
            </div>

   
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-48 p-2 shadow"
            >
              {genderOptions.map((gender, index) => (
                <li key={index} onClick={() => setSelectedGender(gender)}>
                  <a>
                    {gender.icon} <span className="ml-2">{gender.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          */}

          <div className="dropdown dropdown-bottom relative">
            {/* Button that shows the selected country or 'Click' */}
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 transition-transform transform hover:scale-105"
              style={{ minWidth: "10rem" }} // Adjust min-width as needed
            >
              {selectedCountry ? (
                <>
                  {selectedCountry.flag}{" "}
                  <span className="ml-2">{selectedCountry.label}</span>
                </>
              ) : (
                "Click"
              )}
            </div>

            {/* Dropdown menu with country options */}
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow overflow-y-auto max-h-60 absolute top-full left-0 right-0 mt-1"
              style={{ maxHeight: "400px", maxWidth: "400px" }} // Adjust max height as needed
            >
              {options.map((country) => (
                <li
                  key={country.value}
                  onClick={() => handleCountryChange(country)}
                >
                  <a className="flex items-center">
                    {country.flag} <span className="ml-2">{country.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      <div className="flex justify-center relative me-60 transition-transform transform hover:scale-105">
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-800 rounded-full py-1 px-4 pr-10  text-cyan-400 shadow-lg shadow-cyan-500/50"
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={{ color: "#26C6DA" }}
          className="absolute right-3 top-1/2 transform -translate-y-1/2"
        />
      </div>

      <div className="flex justify-between items-center">
        <a href="/premium">
          <button className="btn bg-cyan-500 shadow-lg shadow-cyan-500/50 text-black mx-4 transition-transform transform hover:scale-105 hover:bg-cyan-800">
            Premium
            <FontAwesomeIcon
              icon={faCrown} // Replace with the appropriate king icon
              className="absolute top-0 right-0 text-yellow-400 text-xs transform translate-x-1/2 -translate-y-1/2"
            />
          </button>
        </a>

        <div className="relative inline-block text-left">
          <img
            id="avatarButton"
            type="button"
            onClick={toggleDropdown}
            className="w-10 h-10 rounded-full cursor-pointer border-2 border-cyan-500 mx-4 shadow-lg shadow-cyan-500/50 transition-transform transform hover:scale-105"
            src="/avatar.png"
            alt="User dropdown"
          />

          {isOpen && (
            <div
              id="userDropdown"
              className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute left-0 mt-1"
              style={{
                transform: "translateX(-100%)", // Move to the left side
              }}
            >
              <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                <div>Bonnie Green</div>
                <div className="font-medium truncate">subho@gmail.com</div>
              </div>
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="avatarButton"
              >
                <li>
                  <a
                    href="/profile"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Profile
                  </a>
                </li>
                <li>
                  <a
                    href="/histroy"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    History
                  </a>
                </li>
                <li>
                  <a
                    href="/watch_later"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Watch Later
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Upload Video
                  </a>
                </li>
              </ul>
              <div className="py-1">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Sign out
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
