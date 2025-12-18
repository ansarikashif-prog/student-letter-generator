import React from 'react';
import HeaderStats from './HeaderStats';


/**
 * Header Component
 * Displays the main application title
 * Fully responsive & semantic
 */
const Header = () => {
  return (
    <header className="header">
  <div className="header-main">
    {/* existing title / subtitle */}
  </div>

  <HeaderStats />
</header>

  );
};
const daysElapsed = daysSinceExam(EXAM_DATE);

export default Header;
