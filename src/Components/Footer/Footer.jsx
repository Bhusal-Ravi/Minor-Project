// Footer.js

import React from 'react';
import './Footer.css'; // Import the corresponding CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
          <li>
            <a href="/designers">Designers</a>
          </li>
        </ul>
      </nav>
      <p>© 2024 LORS TEAM. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
