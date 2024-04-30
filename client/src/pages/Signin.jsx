import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";

function Signin() {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleLogin = async () => {
    if (!credentials.username.trim() || !credentials.password.trim()) {
      setError("Please enter both username and password.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/api/user/login/", credentials);
      if (response.status === 200) {
        dispatch(login({ username: credentials.username }));
        navigate("/");
      }
    } catch (error) {
      setError(error.response.data);
    }
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="signin-container">
      <div className="login">
        <div className="lContainer">
          <h1 className="welcome">Welcome</h1>
          <input
            type="text"
            placeholder="username"
            id="username"
            onChange={handleChange}
            className="lInput"
          />
          <input
            type="password"
            placeholder="password"
            id="password"
            onChange={handleChange}
            className="lInput"
          />
          {error && <p className="error-message">{error}</p>}
          <button onClick={handleLogin} className="lButton">
            Login
          </button>
          <p className="signup-link">
            Don't have an account? <span onClick={handleSignup}>Sign Up</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signin;
