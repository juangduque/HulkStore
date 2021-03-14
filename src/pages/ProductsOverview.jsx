import React from 'react';
import { Link } from 'react-router-dom';
import ProductOverviewCard from '../components/ProductOverviewCard.jsx';

// Style
import '../styles/css/pages/productsOverview.css';

class ProductsOverview extends React.Component{

  render(){

    return(
      <main>
        <h1>Camisetas</h1>

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
          <ProductOverviewCard name="item1" reference="ref1" quantity="###"/>
          <ProductOverviewCard name="item1" reference="ref1" quantity="###"/>        
          <ProductOverviewCard name="item1" reference="ref1" quantity="###"/>        
          <ProductOverviewCard name="item1" reference="ref1" quantity="###"/>        
          <ProductOverviewCard name="item1" reference="ref1" quantity="###"/>        
          <ProductOverviewCard name="item1" reference="ref1" quantity="###"/>        
          <ProductOverviewCard name="item1" reference="ref1" quantity="###"/> 
        </div>

        {/* Page options */}
        <div className="optionsContainer">
          <div className="optionsContainer-return">
            <Link to="/">
              <span></span>
              <p>Regresar</p>
            </Link >
          </div>
          <div className="optionsContainer-addProduct">
            <Link to="/">
              <span></span>
              <p>Agregar producto</p>
            </Link>
          </div>
        </div>
      </main>
    )
  }
}

export default ProductsOverview;