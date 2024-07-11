import "../../styling/headerStyle/header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../contextComponent/context";

function Header() {
  const { currentUser, setUser } = useContext(Context);
  function logout() {
    localStorage.removeItem("currentUser");
    setUser(null);
  }
  return (
    <div id="header">
      <img src="assets/Books-of-age.png" alt="" id="Header-Logo" />
      <div id="navigation-section">
        <ul id="navigation-items-container">
          <Link to="/" className="navigation-items">
            <li>Home</li>
          </Link>

          <Link to="/about" className="navigation-items">
            <li>About</li>
          </Link>

          <Link to="/contact" className="navigation-items">
            <li>Contact</li>{" "}
          </Link>
        </ul>
      </div>
      {currentUser ? (
        <div id="Signup-Logout-button" onClick={logout}>
          Logout
        </div>
      ) : (
        <Link id="Signup-Logout-button" to="/Signup">
          <div>Signup</div>
        </Link>
      )}
    </div>
  );
}

export default Header;
