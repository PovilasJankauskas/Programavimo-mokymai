import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank">
            <FaTwitter />
          </a>
          <a href="https://youtube.com" target="_blank">
            <FaYoutube />
          </a>
        </div>
      </footer>
      <div className="copyright">
        <p>© 2025 Hogwarts School of Wizardry. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
