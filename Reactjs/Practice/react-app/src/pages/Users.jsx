import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Title */}
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        👥 Users
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {users.map((user) => (
          <div
            key={user.id}
            onClick={() => navigate(`/user/${user.id}`)}
            className="bg-white p-5 rounded-xl shadow cursor-pointer 
                       hover:shadow-lg hover:scale-105 transition duration-300"
          >

            {/* Avatar */}
            <div className="flex justify-center mb-3">
              <img
                src={`https://i.pravatar.cc/100?img=${user.id}`}
                alt="avatar"
                className="w-16 h-16 rounded-full"
              />
            </div>

            {/* Name */}
            <h3 className="text-lg font-semibold text-gray-800 text-center">
              {user.name}
            </h3>

            {/* Email */}
            <p className="text-sm text-gray-500 text-center mt-1">
              {user.email}
            </p>

            {/* City */}
            <p className="text-xs text-gray-400 text-center mt-2">
              {user.address.city}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Users;