import React from 'react';

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Hero Section */}
      <div className="bg-white shadow-md rounded-xl p-8 mb-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          Welcome to Dashboard App 🚀
        </h1>
        <p className="text-gray-600">
          Manage users, explore data, and navigate through a modern React application.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Users */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            👥 Users
          </h2>
          <p className="text-gray-600">
            View and manage users fetched from API with dynamic routing.
          </p>
        </div>

        {/* Dashboard */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            📊 Dashboard
          </h2>
          <p className="text-gray-600">
            Access profile and settings using nested routing.
          </p>
        </div>

        {/* Secure Access */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            🔐 Secure
          </h2>
          <p className="text-gray-600">
            Protected routes ensure only logged-in users can access data.
          </p>
        </div>

      </div>

      {/* Info Section */}
      <div className="bg-white mt-6 p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          📌 About This App
        </h2>
        <p className="text-gray-600 leading-relaxed">
          This dashboard demonstrates key React concepts such as routing,
          API integration, protected routes, and layout design.
          It is built to simulate a real-world application structure.
        </p>
      </div>

    </div>
  );
}

export default Home;