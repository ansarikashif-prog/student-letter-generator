import React from 'react';

/**
 * LanguageToggle Component
 * Allows user to switch between English and Hindi
 */
const LanguageToggle = ({ language, onChange }) => {
  return (
    <div className="language-toggle">
      <div className="toggle-wrapper" aria-label="Language selector">
        {/* English Button */}
        <button
          type="button"
          className={`toggle-button ${language === 'en' ? 'active' : ''}`}
          onClick={() => onChange('en')}
        >
          English
        </button>

        {/* Hindi Button */}
        <button
          type="button"
          className={`toggle-button ${language === 'hi' ? 'active' : ''}`}
          onClick={() => onChange('hi')}
        >
          हिंदी
        </button>
      </div>
    </div>
  );
};

export default LanguageToggle;
