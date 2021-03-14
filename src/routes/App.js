import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Component
import Header from '../components/Header.jsx';

// Pages
import Home from '../pages/Home.jsx';
import ProductsOverview from '../pages/ProductsOverview.jsx';

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/productos" component={ProductsOverview} />
    </Switch>
  </BrowserRouter>
);

export default App;
