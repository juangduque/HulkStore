import React from 'react';
import { Link } from 'react-router-dom';
import ProductOverviewCard from '../components/ProductOverviewCard.jsx';

// Style
import '../styles/css/pages/productsOverview.css';

// Search by name of the product

// function useSearchProducts(products) {
//   const [query, setQuery] = React.useState('');
//   const [filteredBadges, setFilteredBadges] = React.useState(products);

//   React.useMemo(() => {
//     const result = products.filter(product => {
//       return `${product.name}`
//         .toLowerCase()
//         .includes(query.toLowerCase());
//     });

//     setFilteredBadges(result);
//   }, [products, query]);

//   return { query, setQuery, filteredBadges };
// }

const ProductsOverview = (props) =>{
  const products = props.location.state.products;
  // const { query, setQuery, filteredProducts } = useSearchBadges(products);
  
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
  Object.size = function(obj) {
  var size = 0,
    key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) size++;
  }
    return size;
  };

  return(
    <main>
      {/* Window's title */}
      <h1>{ props.location.state.title }</h1>

      {/* Search section */}
      <div className="searchContainer">
        <span></span>
        {/* <input type="text" placeholder="Buscar"/> */}
        <input
          type="text"
          className="form-control"
          placeholder="Buscar"
          // value={query}
          // onChange={e => {
          //   setQuery(e.target.value);
          // }}
        />
      </div>

      {/* Products table */}
      <div className="productDetailsContainer">
        <div className="columnTitle">
          <h3>Nombre</h3>
          <h3>Referencia</h3>
          <h3>Cantidad</h3>
        </div>
        { 
          Object.size(products) != 0 ? arrayOfProducts :
          <div className="withOutProductsTitle">
            <h2 >No hay productos registrados aún</h2>
            <span></span>
          </div>
        }        
      </div>

      {/* Page options */}
      <div className="optionsContainer">
        <Link className="optionsContainer-returnOverview" to="/">
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