import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";

function Signin() {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    email: "", 
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 

  const handleChange = (e, field) => {
    setUserData((prev) => ({
      ...prev,
      [field]: e.target.value
    }));
  };
  const handleLogin = async () => {
    if (!userData.email.trim() || !userData.password.trim()) {
      setError("Please enter both email and password.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/api/user/login/", userData); 
      if (response.status === 200) {
        dispatch(login({ fullname: userData.email }));
        navigate("/");
      }
    } catch (error) {
      setError(error.response.data.message || "An error occurred"); o
    }
  };

  return (
    <div className="signin-container">
      <div className="login">
        <div className="lContainer">
          <h1 className="welcome">Welcome</h1>
          <input
            type="text"
            placeholder="Email"
            id="email"
            value={userData.email}
            onChange={(e) => handleChange(e, "email")}
            className="lInput"
          />
          <input
            type="password"
            placeholder="password"
            id="password"
            value={userData.password}
            onChange={(e) => handleChange(e, "password")}
            className="lInput"
          />
          {error && <p className="error-message">{error}</p>}
          <button s onClick={handleLogin} className="SButton">
            Login
          </button>
          <p className="signup-link">
            Don't have an account? <Link to ="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
  
}


export default Signin;
