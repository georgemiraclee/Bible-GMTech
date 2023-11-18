import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className='nav-wrapper'>
      <Link to='/' className='nav-link'>
        Alkitab
      </Link>
      <Link to='/about' className='nav-link'>
        About
      </Link>
      <Link to='/contact' className='nav-link'>
        Contact
      </Link>
      <Link to='/faq' className='nav-link'>
        FAQ
      </Link>
    </nav>
  );
};

export default Navigation;
