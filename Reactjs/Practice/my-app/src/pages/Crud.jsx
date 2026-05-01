import { useEffect, useState } from "react";
import axios from "axios";

function UserApp() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });
  const [loading, setLoading] = useState(false);

  const API = "https://jsonplaceholder.typicode.com/users";

  // 🔹 Fetch Users
  const fetchUsers = async () => {
    try {
      const res = await axios.get(API);
      setUsers(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  // 🔹 Handle Input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // 🔹 Create User
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email) return;

    try {
      setLoading(true);

      const res = await axios.post(API, formData);

      // Add new user to UI (since fake API won't store it)
      setUsers((prev) => [
        ...prev,
        { ...res.data, id: Date.now() }
      ]);

      // Reset form
      setFormData({ name: "", email: "" });

    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Delete User
  const deleteUser = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);

      // Update UI
      setUsers((prev) => prev.filter((user) => user.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  // 🔹 Run once
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div style={{ maxWidth: "500px", margin: "auto" }}>
      <h2>User CRUD App</h2>

      {/* 🔸 Create Form */}
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <br /><br />

        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit">
          {loading ? "Adding..." : "Add User"}
        </button>
      </form>

      <hr />

      {/* 🔸 User List */}
      {users.map((user) => (
        <div
          key={user.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <div>
            <strong>{user.name}</strong>
            <br />
            <small>{user.email}</small>
          </div>

          <button onClick={() => deleteUser(user.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default UserApp;