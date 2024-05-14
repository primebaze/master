
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import { useState } from "react";
import SearchBar from "./SearchBar"
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
      <Link to="/">
      <img src="logo.png" alt="" style={{height:50,width:120,objectFit:"contain"}} />
          </Link>
      
      </div>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <MenuIcon/>
      </div>
      <div className="searchbar">
<SearchBar/>
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
          <Link to="/terms">
            <span>Terms</span>
          </Link>
          <Link to="/privacy">
            <span>Privacy</span>
          </Link>
          <Link to="https://example.com">
            <span>Contact</span>
          </Link>
          <button onClick={handleLogout}>Logout</button> 
        </div>
        <img src="/settings.svg" alt="" className="icon" />
      </div>
    </div>
  );
}

export default Navbar;
