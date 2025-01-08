"use client";
import { useState } from "react";
import MidNav from "./MidNav";
import logo from "../../../../UI/icon/icom.png";

import { FaHandHoldingHeart, FaUserCircle } from "react-icons/fa";
import { IoIosSettings, IoMdBook } from "react-icons/io";
import Image from "next/image";
import { GoHome } from "react-icons/go";
import { RiGalleryView2 } from "react-icons/ri";
import { PiLightbulbFilamentLight } from "react-icons/pi";
import { IoBookmarkOutline } from "react-icons/io5";
import { GrUserAdd } from "react-icons/gr";
import { TbMessages } from "react-icons/tb";

const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside
        className={`${
          isSidebarOpen ? "w-64" : "w-20"
        } bg-white shadow-lg transition-all duration-300`}
      >
        <div className="flex flex-col items-center p-4">
          <button
            className="mb-4 p-2 rounded-full hover:bg-gray-200"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? (
              <Image
                src={logo}
                alt="Logo"
                className="h-12 w-12 object-contain"
              />
            ) : (
              <span className="material-icons text-gray-600">
                <Image
                  src={logo}
                  alt="Logo"
                  className="h-10 w-10 object-contain"
                />
              </span>
            )}
          </button>
          <nav className="space-y-4">
            <button className="w-full text-left flex items-center gap-2">
              <span className="material-icons">
                <GoHome />
              </span>
              {isSidebarOpen && <span>Home</span>}
            </button>
            <button className="w-full text-left flex items-center gap-2">
              <span className="material-icons">
                <RiGalleryView2 />
              </span>
              {isSidebarOpen && <span>All Duas</span>}
            </button>
            <button className="w-full text-left flex items-center gap-2">
              <span className="material-icons">
                <PiLightbulbFilamentLight />
              </span>
              {isSidebarOpen && <span>Memorize</span>}
            </button>
            <button className="w-full text-left flex items-center gap-2">
              <span className="material-icons">
                <IoBookmarkOutline />
              </span>
              {isSidebarOpen && <span>Bookmark</span>}
            </button>
            <button className="w-full text-left flex items-center gap-2">
              <span className="material-icons">
                <GrUserAdd />
              </span>
              {isSidebarOpen && <span>Reqyeah</span>}
            </button>
            <button className="w-full text-left flex items-center gap-2">
              <span className="material-icons">
                <TbMessages />
              </span>
              {isSidebarOpen && <span>Dua Info</span>}
            </button>
            <button className="w-full text-left flex items-center gap-2">
              <span className="material-icons">
                <IoMdBook />
              </span>
              {isSidebarOpen && <span>Book</span>}
            </button>
            <button className="w-full text-left flex items-center gap-2">
              <span className="material-icons">
                <FaHandHoldingHeart />
              </span>
              {isSidebarOpen && <span>I Want To Support</span>}
            </button>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Duas Page</h1>
          <div className="flex items-center space-x-4">
            {/* Search */}
            <input
              type="text"
              placeholder="Search by Dua Name"
              className="border p-2 rounded"
            />

            {/* User Icon */}
            <div className="relative">
              <button
                className="p-2 rounded-full hover:bg-gray-200"
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              >
                <span className="material-icons text-gray-600">
                  {/* account_circle */}
                  <FaUserCircle />
                </span>
              </button>
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 bg-white border rounded shadow-lg w-40">
                  <ul>
                    <li className="flex p-2 hover:bg-gray-100 cursor-pointer">
                      <FaHandHoldingHeart className="mr-3" />
                      Support Us
                    </li>
                    <li className="p-2 hover:bg-gray-100 cursor-pointer">
                      Download Dua App
                    </li>
                    <li className="p-2 hover:bg-gray-100 cursor-pointer">
                      Privacy Policy
                    </li>
                    <li className="p-2 hover:bg-gray-100 cursor-pointer">
                      Thanks & Credits
                    </li>
                    <li className="p-2 hover:bg-gray-100 cursor-pointer">
                      About Us
                    </li>
                    <li className="p-2 hover:bg-gray-100 cursor-pointer">
                      Copyright Warning
                    </li>
                    <li className="p-2 hover:bg-gray-100 cursor-pointer">
                      Our Other projects
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Settings Icon */}
            <button
              className="p-2 rounded-full hover:bg-gray-200"
              onClick={() => setIsSettingsOpen(true)}
            >
              <span className="material-icons text-gray-600">
                <IoIosSettings />
              </span>
            </button>
          </div>
        </header>
        <MidNav />

        {/* Content */}
        <section className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold">
              1. The servant is dependent on his Lord
            </h2>
            <p className="text-gray-800">
              All human beings depend on Allah for their welfare and prevention
              of evil in various matters of their religion and world.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Reference: Surah Al-Fatir 35:15
            </p>
          </div>
        </section>
      </main>

      {/* Settings Panel */}
      {isSettingsOpen && (
        <aside className="w-80 bg-gray-50 p-6 shadow-lg absolute right-0 top-0 h-full">
          <button
            className="p-2 rounded-full hover:bg-gray-200 mb-6"
            onClick={() => setIsSettingsOpen(false)}
          >
            <span className="material-icons text-gray-600">close</span>
          </button>
          <div>
            <h2 className="text-lg font-semibold mb-4">Settings</h2>

            <div className="space-y-4">
              <div>
                <button className="p-2 font-medium text-gray-700 hover:first-line:bg-red-100">
                  Language Settings
                </button>
                <select className="mt-2 w-full p-2 border border-gray-300 rounded">
                  <option>English</option>
                  <option>বাংলা</option>
                </select>
              </div>
              <div>
                <button>General Setting</button>
                <button>Font Setting</button>
                <button>Appearance Setting</button>
              </div>
            </div>
          </div>
        </aside>
      )}
    </div>
  );
};

export default NavBar;
