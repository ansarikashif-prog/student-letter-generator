import React from 'react';

/**
 * LanguageToggle Component
 * Allows user to switch between English and Hindi
 * Used for assignment-related academic letters
 */
const LanguageToggle = ({ language, onChange }) => {
  return (
    <div className="language-toggle">
      <div
        className="toggle-wrapper"
        aria-label="Letter language selector"
      >
        {/* English Button */}
        <button
          type="button"
          className={`toggle-button ${language === 'en' ? 'active' : ''}`}
          onClick={() => onChange('en')}
          aria-pressed={language === 'en'}
        >
          English
        </button>

        {/* Hindi Button */}
        <button
          type="button"
          className={`toggle-button ${language === 'hi' ? 'active' : ''}`}
          onClick={() => onChange('hi')}
          aria-pressed={language === 'hi'}
        >
          हिंदी
        </button>
      </div>
    </div>
  );
};

export default LanguageToggle;
