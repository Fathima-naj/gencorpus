import React from 'react';

function About() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      
      <div className=" w-full bg-white shadow-lg rounded-xl p-8">

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          About This Project
        </h1>

        {/* Intro */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          This is a Multi-Page Dashboard application built using React and React Router.
          It demonstrates modern frontend concepts like routing, API integration,
          protected routes, and dynamic pages.
        </p>

        {/* Features Section */}
        <h2 className="text-xl font-semibold text-gray-700 mb-3">
          🚀 Key Features
        </h2>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600 mb-6">
          <li>✔ React Router Navigation</li>
          <li>✔ Route-Based Layout</li>
          <li>✔ Protected Routes (Authentication)</li>
          <li>✔ API Data Fetching (Users)</li>
          <li>✔ Dynamic Routing (/user/:id)</li>
          <li>✔ Nested Routes (Dashboard)</li>
        </ul>

        {/* Tech Stack */}
        <h2 className="text-xl font-semibold text-gray-700 mb-3">
          🛠 Tech Stack
        </h2>

        <div className="flex flex-wrap gap-3 mb-6">
          <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
            React
          </span>
          <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
            React Router
          </span>
          <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">
            Tailwind CSS
          </span>
          <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-sm">
            Axios
          </span>
        </div>

        {/* Description */}
        <h2 className="text-xl font-semibold text-gray-700 mb-3">
          📌 Purpose
        </h2>

        <p className="text-gray-600 leading-relaxed">
          This project is designed to help students understand how real-world web
          applications are structured. It focuses on building reusable components,
          managing navigation, and handling user authentication in a simple way.
        </p>

      </div>

    </div>
  );
}

export default About;