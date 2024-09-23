"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faEye,
  faSignOutAlt,
  faCrown,
} from "@fortawesome/free-solid-svg-icons";
import { FaCamera } from "react-icons/fa";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import TabsLink from "../../../components/TabsLink";

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isCreatorMode, setIsCreatorMode] = useState(false);
  const [userData, setUserData] = useState({
    fullName: "Bonnie Green",
    email: "bonnie.green@example.com",
    bio: "I love exploring the digital world and creating content.",
    location: "USA",
    password: "",
    avatar: "/avatar.png",
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [avatarFile, setAvatarFile] = useState(null);

  const handleEditToggle = () => {
    setIsEditing((prev) => !prev);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    console.log("Profile saved:", userData);
    setIsEditing(false);
  };

  const toggleCreatorMode = () => {
    setIsCreatorMode((prev) => !prev);
  };

  const uploadedVideos = Array.from({ length: 12 }, (_, i) => i + 1);

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setIsDropdownOpen((prev) => !prev);
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserData((prevData) => ({
          ...prevData,
          avatar: reader.result, // Set the uploaded image as the avatar
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="dark:bg-slate-900 text-white min-h-screen">
      <Navbar />
      <TabsLink />
      <div className="min-h-screen bg-gray-900 flex flex-col items-center py-10">
        <div className="bg-gray-800 text-white rounded-lg p-6 w-full max-w-lg shadow-lg shadow-cyan-500/100">
          <div className="flex flex-col items-center mb-6">
            <div className="relative mb-4">
              <img
                className="w-20 h-20 rounded-full border-4 border-cyan-500 shadow-lg shadow-cyan-500/50"
                src={userData.avatar}
                alt="User Avatar"
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
                id="avatar-upload"
              />
              <label
                htmlFor="avatar-upload"
                className="absolute bottom-0 right-0 bg-cyan-500 p-1 rounded-full cursor-pointer"
              >
                <FaCamera className="text-black" />
              </label>
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold">{userData.fullName}</h2>
              <p className="text-cyan-400">{userData.email}</p>
              <button
                className="btn bg-cyan-500 shadow-lg shadow-cyan-500/50 text-black px-4 py-2 mt-2 transition-transform transform hover:scale-105"
                onClick={handleEditToggle}
              >
                {isEditing ? "Cancel" : "Edit Profile"}{" "}
                <FontAwesomeIcon icon={faPen} className="ml-2" />
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-gray-400">Bio:</label>
              {isEditing ? (
                <textarea
                  name="bio"
                  value={userData.bio}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded-lg bg-gray-700 text-white"
                />
              ) : (
                <p className="text-gray-300">{userData.bio}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-400">Location:</label>
              {isEditing ? (
                <input
                  type="text"
                  name="location"
                  value={userData.location}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded-lg bg-gray-700 text-white"
                />
              ) : (
                <p className="text-gray-300">{userData.location}</p>
              )}
            </div>

            {isEditing && (
              <button
                className="btn bg-green-500 text-black px-4 py-2 mt-4"
                onClick={handleSave}
              >
                Save Changes
              </button>
            )}
          </div>

          <div className="mt-8 space-y-4">
            <div className="flex flex-col space-y-2">
              <button className="btn bg-gray-700 w-full text-white py-2 flex items-center justify-between hover:bg-gray-600 transition-transform transform hover:scale-105">
                View History{" "}
                <FontAwesomeIcon icon={faEye} className="text-cyan-500" />
              </button>
              <button className="btn bg-cyan-500 w-full text-black py-2 flex items-center justify-between shadow-lg shadow-cyan-500/50 transition-transform transform hover:scale-105">
                Premium{" "}
                <FontAwesomeIcon icon={faCrown} className="text-yellow-400" />
              </button>
              <button className="btn bg-red-500 w-full text-white py-2 flex items-center justify-between transition-transform transform hover:scale-105">
                Log Out{" "}
                <FontAwesomeIcon icon={faSignOutAlt} className="text-white" />
              </button>
            </div>

            <div>
              <label className="block text-gray-400">Change Password:</label>
              {isEditing ? (
                <input
                  type="password"
                  name="password"
                  value={userData.password}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded-lg bg-gray-700 text-white"
                  placeholder="New Password"
                />
              ) : (
                <p className="text-gray-300">*******</p>
              )}
            </div>

            <div className="flex items-center justify-between my-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={isCreatorMode}
                  onChange={toggleCreatorMode}
                  className="mr-2"
                />
                <span className="text-gray-400">Creator Mode</span>
              </label>
            </div>
          </div>
        </div>

        {isCreatorMode && (
          <main className="p-4 mt-8 w-full max-w-5xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Your Uploaded Videos</h2>
              <button className="btn bg-cyan-500 text-white shadow-lg shadow-cyan-500/100 transition-transform transform hover:scale-105 hover:bg-cyan-800">
                Remove All
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-0 md:mx-20 transition">
              {uploadedVideos.map((i) => {
                return (
                  <div
                    key={i}
                    className="bg-gray-800 rounded overflow-hidden shadow-lg shadow-cyan-500/50 transition-transform transform hover:scale-105 relative group"
                  >
                    <img
                      src="/images.jpg"
                      alt={`Video ${i}`}
                      className="w-full h-40 object-cover"
                    />
                    <div className="absolute top-2 left-2 shadow-lg shadow-cyan-500/100 bg-cyan-600 text-white text-xs font-bold px-2 py-1 rounded">
                      {i % 2 === 0 ? "4K" : "1080p"}
                    </div>
                    <div className="absolute bottom-2 right-2 shadow-lg shadow-cyan-500/100 bg-gray-700 text-white text-xs font-bold px-2 py-1 rounded">
                      {i % 2 === 0 ? "1 hour" : "30 mins"}
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold">Video Title {i}</h3>
                      <p className="text-gray-300">Uploaded on MM/DD/YYYY</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </main>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
