import React from 'react';


// COMPONENTS
import ButtonHome from '../components/ButtonHome.jsx';

// ICONS
import shirtIcon from '../assets/icon/shirt.png';
import cupIcon from '../assets/icon/cup.png';
import comicIcon from '../assets/icon/comic.png';
import toysIcon from '../assets/icon/superhero.png';
import accesoriesIcon from '../assets/icon/accessories.png';

// DATA
import data from '../db/db.json';

// STYLE
import '../styles/css/pages/home.css';

class Home extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      products: data
    };
  }

  render(){
    const categories = Object.keys( this.state.products );

    return(
      <main>
        <h1>Registra ingreso o ventas de tus productos</h1>
        <h2>Categorías</h2>
        {/* Shirts Category */}
        <ButtonHome 
          icon={shirtIcon} 
          title={categories[0]}
          to={`/productos/${categories[0]}`}
          products={ this.state.products.Camisetas }
        />
        {/* Cups Category */}
        <ButtonHome  
          icon={cupIcon} 
          title={categories[1]} 
          to={`/productos/${categories[1]}`}
          products={ this.state.products.Vasos }       
        />
        {/* Comics Category */}
        <ButtonHome 
          icon={comicIcon} 
          title={categories[2]} 
          to={`/productos/${categories[2]}`}          
          products={ this.state.products.Comics }    
        />
        {/* Toys Category */}
        <ButtonHome 
          icon={toysIcon} 
          title={categories[3]} 
          to={`/productos/${categories[3]}`}         
          products={ this.state.products.Juguetes }    
        />
        {/* Accessories Category */}
        <ButtonHome 
          icon={accesoriesIcon} 
          title={categories[4]}  
          to={`/productos/${categories[4]}`}        
          products={ this.state.products.Accesorios }    
        />   
      </main>
    );

  };

};

export default Home;