// import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router";

// const headingStyle = {
//   color: "black",
//   backgroundColor: "grey",
// };

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();
  return (
    <div className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color={showAdd ? "red" : "Green"}
          text={showAdd ? "Close" : "Add"}
          onClick={onAdd}
        />
      )}
    </div>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
