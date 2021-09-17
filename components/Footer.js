import React from "react";
const Footer = ({ isHome }) => {
  const styles = {
    position: "fixed",
    top: "auto",
    bottom: "0",
    width: "100%",
    display: "inline-block",
  };
  return (
    <footer
      className="bg-dark text-light text-center footer"
      style={!isHome ? styles : {}}
    >
      <div className="container p-4">
        <h1> &copy; Alejo Torres</h1>
        <p>2000- {new Date().getFullYear()}</p>
        <p>All reights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
