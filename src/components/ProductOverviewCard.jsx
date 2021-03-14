import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/css/components/productOverviewCard.css';

const ProductOverviewCard = (props) => (
  <Link className="productCard" to="/">
    <h3>{ props.name }</h3>
    <h3>{ props.reference }</h3>
    <h3>{ props.quantity }</h3>
  </Link>
);

export default ProductOverviewCard;