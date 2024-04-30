
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/signin");
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>Anatomy ECMS</span>
      </div>
      <div className="searchbar">
        <input
          type="text"
          placeholder="Search Anatomical Materials, Courses, 3D Models, etc"
          style={{
            backgroundColor: "transparent",
            borderColor: "white",
            width: "100%",
            maxWidth: "700px",
            padding: "8px",
            borderRadius: "4px",
            outline: "none",
            border: "1px solid white",
          }}
        />
      </div>

      <div className="icons">
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <Link to="/">
            <span>Home</span>
          </Link>
          <span>Profile</span>
          <Link to="/quiz">
            <span>Quiz</span>
          </Link>
          <Link to="/forum">
            <span>Forum</span>
          </Link>
          <button onClick={handleLogout}>Logout</button> 
        </div>
        <img src="/settings.svg" alt="" className="icon" />
      </div>
    </div>
  );
}

export default Navbar;
