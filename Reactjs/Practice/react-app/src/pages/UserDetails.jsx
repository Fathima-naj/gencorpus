import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function UserDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  // Loading UI
  if (!user) {
    return (
      <div className="flex justify-center mt-10">
        <p className="text-gray-600">Loading user details...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start p-6">

      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md relative">

        {/* 🔙 Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 text-blue-500 hover:underline"
        >
          ← Back
        </button>

        {/* Avatar */}
        <div className="flex justify-center mb-4">
          <img
            src={`https://i.pravatar.cc/150?img=${id}`}
            alt="avatar"
            className="w-20 h-20 rounded-full"
          />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          {user.name}
        </h2>

        {/* Details */}
        <div className="space-y-3 text-gray-700">

          <p>
            <span className="font-semibold">Email:</span> {user.email}
          </p>

          <p>
            <span className="font-semibold">Phone:</span> {user.phone}
          </p>

          <p>
            <span className="font-semibold">City:</span> {user.address.city}
          </p>

          <p>
            <span className="font-semibold">Company:</span> {user.company.name}
          </p>

          <p>
            <span className="font-semibold">Website:</span> {user.website}
          </p>

        </div>

      </div>

    </div>
  );
}

export default UserDetails;