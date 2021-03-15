import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/css/components/buttonHome.css';

const ButtonHome = (props) => (
  <Link className="buttonHome" to={{ 
    pathname: props.to, 
    state: { 
      products: props.products,
      title: props.title
    }
  }} >
    <span><img src={ props.icon } alt=""/></span>
    <h2>{ props.title }</h2>
  </Link>
);

export default ButtonHome;