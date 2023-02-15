import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
      <ul className="menu cf">
        <li>
          <Link to="/orange">ORANGE</Link>
        </li>
        <li>
          <Link to="/yellow">YELLOW</Link>
          <ul className="submenu">
            <li>
              <Link to="/green">GREEN</Link>
            </li>
            <li>
              <Link to="/black">BLACK</Link>
            </li>
          </ul>
        </li>

        <li>
          <Link to="/red">RED</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
