import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/css/pages/productDetail.css'

const ProductDetail = (props) => {
  const item = props.location.state.item;
  const disableStyle = {
    color: "#c4c4c4",
    backgroundColor: "grey",
    border: "3px solid #c4c4c4"
  };

  return(
    <main>
      <h1 className="viewTitle">{ item.name }</h1>

      {/* Highlights cards section */}
      <div className="highligthsCardsContainer"> 
        {/* quantity section */}
        <div className="cardSection">
          <div className="infoLabel">
            <h2>{ item.stock }</h2>
        </div>
        <h3>Cantidad en existencia</h3>
        </div>
        {/* unit price section */}
        <div className="cardSection">
          <div className="infoLabel">
            <h2>$</h2>
            <h2>{ item.unitPrice }</h2>
          </div>
          <h3>Valor unitario</h3>
        </div>
        {/* Total price section */}
        <div className="cardSection">
          <div className="infoLabel">
            <h2>$</h2>
            <h2>{ item.stock * item.unitPrice }</h2>
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
        {
          item.stock == 0 ?
          <button style={disableStyle}>Registrar venta</button> :
          <button >Registrar venta</button>
        }
        <button>Ver histórico</button>
      </div>

      {/* Return section */}
      <div className="optionsContainer">
        {/* <Link className="optionsContainer-return" to={props.location.state.returnLink}> */}
        <div className="optionsContainer-return">
          <span></span>
          <p>Regresar</p>
        </div>
        {/* </Link> */}
      </div>         
    </main>
  );
};

export default ProductDetail;