import React from 'react';
import { Link } from 'react-router-dom';

import HSLogo from '../assets/img/HS-logo.png';
import LateralMenuIcon from '../assets/icon/menu button.png';

import '../styles/css/components/header.css';

const Header = () => (
  <header>
    <div className="logoContainer">
      <Link to="/">
        <img src={HSLogo} alt="Clio logo"/>
      </Link>
    </div>
    <div className="lateralMenu">
      <img src={LateralMenuIcon} alt=""/>
    </div>
  </header>
);

export default Header;