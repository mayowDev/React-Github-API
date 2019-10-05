import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = props => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <Link to='/'>
          <i class={props.icon}></i> {props.title}
        </Link>
      </h1>

      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};

//below is how and where to create propTypes & default props

// Navbar.defaultProps = {
//   title: "Github finder",
//   icon: "fab fa-github"
// };
Navbar.propTypes = {
  title: propTypes.string.isRequired,
  icon: propTypes.string.isRequired
};

export default Navbar;
