import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  const HandleClick = () => {
    window.location.href =
      "https://drive.google.com/file/d/1-F0ErjL0yMOqqumCgho5um2kxEKIrNZb/view?usp=sharing";
  };

  return (
    <section className="navbar">
      <div className="left-section">
        <h1 className="name"> M</h1>
        <h1 className="second-name"> P</h1>
      </div>

      <div className="right-section">
        <button onClick={HandleClick} className="button">
          Download My Resume
        </button>
      </div>
    </section>
  );
};

export default Navbar;
