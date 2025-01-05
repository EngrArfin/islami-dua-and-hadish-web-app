import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-600 min-h-screen flex items-center justify-center text-white px-6">
      <div className="text-center sm:text-left max-w-4xl w-full">
        <h1 className="text-6xl sm:text-7xl font-bold leading-tight mb-6">
          Islami Dua And Hadish Web App
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 mb-8">
          Explore a rich collection of Islamic duas and hadiths, designed to
          enhance your spiritual growth and enrich your daily prayers.
        </p>
        <div className="mt-6">
          <a
            href="#explore"
            className="bg-blue-800 hover:bg-blue-700 text-white px-10 py-4 rounded-lg text-lg sm:text-xl transition duration-300"
          >
            Start Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
