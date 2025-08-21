import React from 'react';
import './Logo.css';
import logo from './Logo.png';

export default function Logo() {
  return (
    <div className="logoHeader-container">
      <a href="#home">
        <img src={logo} alt="Yorktown Jewelers Logo" className="logo-img" />
      </a>
    </div>
  );
}
