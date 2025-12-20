import React from 'react';

/**
 * Header Component
 * Displays the main application title
 * Fully responsive & semantic
 */
const Header = () => {
  return (
    <header className="app-header">
      <div className="app-header-inner">
        <h1 className="app-title">Student Academic Support Letter Generator</h1>
        <p className="app-subtitle">
          For assignment-related concerns after result declaration
        </p>
      </div>
    </header>
  );
};

export default Header;
