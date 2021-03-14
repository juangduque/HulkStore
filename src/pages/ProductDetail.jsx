import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/css/pages/productDetail.css'

class ProductDetail extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      quantity: 10,
      unitPrice: 20000
    }
  }

  render(){
    return(
      <main>
        <h1 className="viewTitle">Item 1</h1>

        {/* Highlights cards section */}
        <div className="highligthsCardsContainer"> 
          {/* quantity section */}
          <div className="cardSection">
            <div className="infoLabel">
              <h2>{ this.state.quantity }</h2>
          </div>
          <h3>Cantidad en existencia</h3>
          </div>
          {/* unit price section */}
          <div className="cardSection">
            <div className="infoLabel">
              <h2>$</h2>
              <h2>{ this.state.unitPrice }</h2>
            </div>
            <h3>Valor unitario</h3>
          </div>
          {/* Total price section */}
          <div className="cardSection">
            <div className="infoLabel">
              <h2>$</h2>
              <h2>{ this.state.quantity * this.state.unitPrice }</h2>
            </div>
            <h3>Valor Total</h3>
          </div>
        </div>

        {/* Buttons options section */}
        <div className="buttonOptionsTitle">
          <h2>Opciones</h2>
        </div>
        <div className="buttonsContainer">
          <button>Registrar ingreso</button>
          <button>Registrar venta</button>
          <button>Ver histórico</button>
        </div>

        {/* Return section */}
        <div className="optionsContainer">
          <div className="optionsContainer-return">
          <Link to="/">
            <span></span>
            <p>Regresar</p>
          </Link>
          </div>
        </div>         
      </main>
    );
  };
};

export default ProductDetail;