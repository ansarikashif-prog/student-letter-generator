import React from 'react';

/**
 * Footer Component
 * Displays contextual copyright information
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <div className="app-footer-inner">
        <p>
          © {currentYear} Student Letter Generator · Supporting students during
          post-result academic processes.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
