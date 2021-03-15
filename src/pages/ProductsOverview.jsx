import React from 'react';
import { Link } from 'react-router-dom';
import ProductOverviewCard from '../components/ProductOverviewCard.jsx';

// Style
import '../styles/css/pages/productsOverview.css';

const ProductsOverview = (props) =>{
  const products = props.location.state.products;
  
  const arrayOfProducts = [];
  for(let item of products) {
    arrayOfProducts.push(
      <ProductOverviewCard     
        key={item.ref}    
        to={`/producto/${props.location.state.title}/${item.name}`}
        returnLink={`/producto/${props.location.state.title}`}
        item= {item}
      />        
    )
  }

  return(
    <main>
      {/* Window's title */}
      <h1>{ props.location.state.title }</h1>

      {/* Search section */}
      <div className="searchContainer">
        <span></span>
        <input type="text" placeholder="Buscar"/>
      </div>

      {/* Products table */}
      <div className="productDetailsContainer">
        <div className="columnTitle">
          <h3>Nombre</h3>
          <h3>Referencia</h3>
          <h3>Cantidad</h3>
        </div>
        { arrayOfProducts }        
      </div>

      {/* Page options */}
      <div className="optionsContainer">
        <Link className="optionsContainer-return" to="/">
          <span></span>
          <p>Regresar</p>
        </Link >
        <Link className="optionsContainer-addProduct" to="">
          <img src="" alt=""/>
          <span></span>
          <p>Agregar producto</p>
        </Link>
      </div>
    </main>
  )

};

export default ProductsOverview;