import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext.tsx';
import { ThemeType } from '../../types/theme.ts';
import './Header.css';

const Header: React.FC = () => {
  const { currentTheme, setTheme } = useTheme();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const themeOptions = [
    { value: 'theme1' as ThemeType, label: 'Minimalist Light' },
    { value: 'theme2' as ThemeType, label: 'Dark Sidebar' },
    { value: 'theme3' as ThemeType, label: 'Colorful Cards' },
  ];

  const handleThemeChange = (theme: ThemeType) => {
    setTheme(theme);
    setIsDropdownOpen(false);
  };

  const isActiveRoute = (path: string) => location.pathname === path;

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <Link to="/" className="logo">
            <span className="logo-icon">🎨</span>
            <span className="logo-text">ThemeSwitcher</span>
          </Link>
        </div>

        <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
          <Link 
            to="/" 
            className={`nav-link ${isActiveRoute('/') ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${isActiveRoute('/about') ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link ${isActiveRoute('/contact') ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>

        <div className="header-right">
          <div className="theme-selector">
            <button
              className="theme-dropdown-trigger"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              aria-label="Select theme"
            >
              <span className="theme-icon">🎭</span>
              <span className="theme-label">
                {themeOptions.find(option => option.value === currentTheme)?.label}
              </span>
              <span className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}>▼</span>
            </button>

            {isDropdownOpen && (
              <div className="theme-dropdown">
                {themeOptions.map((option) => (
                  <button
                    key={option.value}
                    className={`theme-option ${currentTheme === option.value ? 'active' : ''}`}
                    onClick={() => handleThemeChange(option.value)}
                  >
                    <span className="theme-preview" data-theme={option.value}></span>
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;