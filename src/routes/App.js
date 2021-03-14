import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Component
import Header from '../components/Header.jsx';

// Pages
import Home from '../pages/Home.jsx';
import ProductsOverview from '../pages/ProductsOverview.jsx';
import ProductDetail from '../pages/ProductDetail.jsx';

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/productos" component={ProductsOverview} />
      <Route exact path="/producto-opciones" component={ProductDetail} />
    </Switch>
  </BrowserRouter>
);

export default App;
