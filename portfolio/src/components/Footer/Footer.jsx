import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <span>© {new Date().getFullYear()} Mridul Pramod</span>
        <span className="footer__meta">Built with React &amp; Framer Motion</span>
      </div>
    </footer>
  );
};

export default Footer;
