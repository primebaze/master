
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/signin");
  };
  const [menuOpen, setMenuOpen] = useState(false); 
  return (
    <div className="navbar">
      <div >
        <img src="logo.png" alt="" style={{height:50,width:120,objectFit:"contain"}} />
      </div>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <MenuIcon/>
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
