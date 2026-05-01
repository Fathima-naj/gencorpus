import React, { useState } from 'react';

function Profile() {

  const storedUser = JSON.parse(localStorage.getItem("user"));

  const [name, setName] = useState(storedUser?.name || "");
  const [email, setEmail] = useState(storedUser?.email || "");
  const [message, setMessage] = useState("");

  const handleSave = (e) => {
    e.preventDefault();

    const updatedUser = {
      ...storedUser,
      name,
      email
    };

    localStorage.setItem("user", JSON.stringify(updatedUser));

    setMessage("Profile updated successfully ✅");
  };

  return (
    <div className="flex justify-center">

      <form
        onSubmit={handleSave}
        className="bg-white shadow-md rounded-xl p-6 w-full max-w-md"
      >

        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Profile
        </h2>

        {/* Success Message */}
        {message && (
          <p className="text-green-600 mb-3">{message}</p>
        )}

        {/* Name */}
        <div className="mb-4">
          <label className="block text-gray-600 mb-1">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-600 mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Save Button */}
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
          Save Changes
        </button>

      </form>

    </div>
  );
}

export default Profile;