import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/css/components/productOverviewCard.css';

const ProductOverviewCard = (props) => (
  <Link className="productCard" to={{ 
    pathname: props.to, 
    state: { 
      item: props.item,
      title: props.text,
      returnLink: props.returnLink
    }
  }} >  
    <h3>{ props.item.name }</h3>
    <h3>{ props.item.ref }</h3>
    <h3>{ props.item.stock }</h3>
  </Link>
);

export default ProductOverviewCard;