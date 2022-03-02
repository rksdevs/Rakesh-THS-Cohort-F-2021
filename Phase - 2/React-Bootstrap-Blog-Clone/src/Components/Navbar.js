import { Component } from "react";
import NavbarOne from "./Navbar-One";
import NavbarTwo from "./Navbar-Two";

class Navbar extends Component {
  render() {
    return (
      <div className="container">
        <NavbarOne />
        <NavbarTwo />
      </div>
    );
  }
}

export default Navbar;
