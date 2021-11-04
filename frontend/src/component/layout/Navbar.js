import React from "react";
import { Link } from "react-router-dom";
// classes scopes the styles
import classes from "./Navbar.module.css";

function Navbar() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Reliable Rides</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Rides</Link>
          </li>
          <li>
            <Link to="/create-ride">Create Ride</Link>
          </li>
          <li>
            <Link to="/booked-rides">Booked Rides</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;