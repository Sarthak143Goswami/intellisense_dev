import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import { useSpring, animated } from 'react-spring';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const animationProps = useSpring({
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 1000 }
  });

  return (
    <animated.header style={animationProps}>
      <nav className='mnc mt-3 text-cyan-100 flex flex-row justify-between items-center p-4'>
        <span className='intel logo-text text-white'>InTelli</span>
        <div className="inteli flex flex-row items-center">
          <Link to="/intelli" className='go' style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
            <div className="go-button">Go Intelli</div>
          </Link>
        </div>

        <div className="menu flex flex-row items-center space-x-8">
          <div className="contact cursor-pointer">
            <Link to="/contact">Contact</Link>
          </div>
          <div className="menu-toggle" onClick={toggleMenu}>
            <span className="menu-icon">&#9776;</span>
            <div className={`dropdown-menu ${isMenuOpen ? 'show' : ''}`}>
              <div className="menu-content">
                <div className="menu-item">
                  <Link to= "/signup" className='menu-link'>Sign Up</Link>
                  <Link to="/signin" className='menu-link'>Sign In</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </animated.header>
  );
};

export default Header;
