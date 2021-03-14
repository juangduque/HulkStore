import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/css/components/buttonHome.css';

const ButtonHome = (props) => (
  <Link className="buttonHome" to={props.to}>
    <span><img src={props.icon} alt=""/></span>
    <h2>{props.text}</h2>
  </Link>
);

export default ButtonHome;