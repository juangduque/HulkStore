import React from 'react';


// COMPONENTS
import ButtonHome from '../components/ButtonHome.jsx';

// ICONS
import shirtIcon from '../assets/icon/shirt.png';
import cupIcon from '../assets/icon/cup.png';
import comicIcon from '../assets/icon/comic.png';
import toysIcon from '../assets/icon/superhero.png';
import accesoriesIcon from '../assets/icon/accessories.png';

// STYLE
import '../styles/css/pages/home.css';

const Home = () => (
  <main>
    <h1>Registra ingreso o ventas de tus productos</h1>
    <h2>Categorías</h2>
    <ButtonHome icon={shirtIcon} text="Camisetas" to="/productos"/>
    <ButtonHome icon={cupIcon} text="Vasos" to="/productos"/>
    <ButtonHome icon={comicIcon} text="Comics" to="/productos"/>
    <ButtonHome icon={toysIcon} text="Juguetes" to="/productos"/>
    <ButtonHome icon={accesoriesIcon} text="Accesorios" to="/productos"/>
  </main>
);

export default Home;