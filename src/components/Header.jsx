import React from 'react';
import HSLogo from '../assets/img/HS-logo.png';
import LateralMenuIcon from '../assets/icon/menu button.png';

import '../styles/css/components/header.css';

const Header = () => (
  <header>
    <div className="logoContainer">
      <img src={HSLogo} alt="Clio logo"/>
    </div>
    <div className="lateralMenu">
      <img src={LateralMenuIcon} alt=""/>
    </div>
  </header>
);

export default Header;