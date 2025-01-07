"use client";
import { useState } from "react";

const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left Sidebar */}
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
            <span className="material-icons text-gray-600">
              {isSidebarOpen ? "menu_open" : "menu"}
            </span>
          </button>
          <nav className="space-y-4">
            <button className="w-full text-left flex items-center gap-2">
              <span className="material-icons">home</span>
              {isSidebarOpen && <span>Home</span>}
            </button>
            <button className="w-full text-left flex items-center gap-2">
              <span className="material-icons">grid_view</span>
              {isSidebarOpen && <span>Categories</span>}
            </button>
            <button className="w-full text-left flex items-center gap-2">
              <span className="material-icons">lightbulb</span>
              {isSidebarOpen && <span>Tips</span>}
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
                  account_circle
                </span>
              </button>
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 bg-white border rounded shadow-lg w-40">
                  <ul>
                    <li className="p-2 hover:bg-gray-100 cursor-pointer">
                      Profile
                    </li>
                    <li className="p-2 hover:bg-gray-100 cursor-pointer">
                      Settings
                    </li>
                    <li className="p-2 hover:bg-gray-100 cursor-pointer">
                      Logout
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
              <span className="material-icons text-gray-600">settings</span>
            </button>
          </div>
        </header>

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
                <h3 className="font-medium text-gray-700">Language Settings</h3>
                <select className="mt-2 w-full p-2 border border-gray-300 rounded">
                  <option>English</option>
                  <option>বাংলা</option>
                </select>
              </div>
              <div>
                <h3 className="font-medium text-gray-700">General Settings</h3>
                <p className="text-sm text-gray-600">
                  Adjust app preferences and themes.
                </p>
              </div>
            </div>
          </div>
        </aside>
      )}
    </div>
  );
};

export default NavBar;
