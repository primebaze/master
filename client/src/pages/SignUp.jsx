import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";

function SignUp() {
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

  const handleSignup = async () => {
    try {
      const response = await axios.post("http://localhost:8000/api/user/register/", credentials);
      if (response.status === 200) {
        dispatch(login({ username: credentials.username }));
        navigate("/"); 
      }
    } catch (error) {
      setError(error.response.data);
    }
  };

  useEffect(() => {
    return () => {
      setError(null);
    };
  }, []);

  return (
    <div className="signin-container">
      <div className="login">
        <div className="lContainer">
          <h1 className="welcome">Create an Account</h1>
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
          <button onClick={handleSignup} className="lButton">
            Sign Up
          </button>
          <p className="signup-link">
            Already have an account?{" "}
            <span onClick={() => navigate("/signin")}>Sign In</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
