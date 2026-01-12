import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // TEMP credentials (later connect backend)
    if (username === "admin" && password === "12345") {
      localStorage.setItem("isAdmin", "true");
      navigate("/ViewBookings");
    } else {
      setError("Invalid Username or Password");
    }
  };

  return (
    <div className="container mt-5 p-5">
      <h2 className="text-center mb-4">Admin Login</h2>

      <form onSubmit={handleLogin} className="col-md-4 mx-auto">
        <input
          type="text"
          placeholder="Username"
          className="form-control mb-3"
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="form-control mb-3"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className="text-danger">{error}</p>}

        <button className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
}

export default AdminLogin;
