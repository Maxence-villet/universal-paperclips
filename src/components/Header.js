import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-regular-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

const Header = ({ theme, onThemeChange }) => {
  return (
    <header className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <h2 className="navbar-brand mb-0">Universal Paperclips</h2>
        <button className="btn theme-toggle" onClick={onThemeChange}>
          {theme === 'light' ? (
            <FontAwesomeIcon icon={faMoon} size="lg" />
          ) : (
            <FontAwesomeIcon icon={faSun} size="lg" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;