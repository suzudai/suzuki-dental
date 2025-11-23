import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import { FaBars, FaTimes } from 'react-icons/fa';

import logoImage from '../assets/images/logo_horizontal.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Always show solid header on sub-pages
  const headerClass = location.pathname === '/' && !isScrolled ? 'header' : 'header scrolled';

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={headerClass}>
      <div className="container header-container">
        <div className="logo">
          <Link to="/">
            <img src={logoImage} alt="鈴木歯科医院 Suzuki Dental Clinic" className="logo-image" />
          </Link>
        </div>

        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <nav className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>ホーム</Link></li>
            <li><Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>当院について</Link></li>
            <li><Link to="/services" onClick={() => setIsMobileMenuOpen(false)}>診療案内</Link></li>
            <li><Link to="/news" onClick={() => setIsMobileMenuOpen(false)}>お知らせ</Link></li>
            <li><Link to="/access" onClick={() => setIsMobileMenuOpen(false)}>アクセス</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
