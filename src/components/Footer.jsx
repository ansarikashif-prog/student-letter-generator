import React from 'react';

/**
 * Footer Component
 * Displays copyright info dynamically
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <div className="app-footer-inner">
        <p>
          © {currentYear} Student Letter Generator. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
