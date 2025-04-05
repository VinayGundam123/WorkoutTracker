// components/NavBar.js
import { Link } from "react-router-dom";
import "./NavBar.css"; // Optional styling

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <Link className='nav-button' to="/home">Home</Link>
      <Link className='nav-button' to="/posts">Community</Link>
      <Link className='nav-button logout' to="/" onClick={() => localStorage.clear()}>Logout</Link>
    </nav>
  );
};

export default NavBar;
