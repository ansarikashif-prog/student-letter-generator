import React from "react";
import HeaderStats from "./HeaderStats";

/**
 * Header Component
 * - Layout + branding only
 * - NO business logic
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

export default Header;
