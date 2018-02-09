import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <div>
    <Link to="/">Trevl</Link>
    <ul>
      <li>about</li>
      <li>login/create</li>
    </ul>
  </div>
);

export default Navbar;
