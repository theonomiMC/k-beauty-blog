import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import Products from "./components/Products";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Error from "./components/Error";
import Wishlist from "./components/Wishlist";
import SingleProduct from './components/SingleProduct';
import './App.css';
import ScrollIcons from "./components/ScrollIcons"
import ScrollToTop from './components/ScrollToTop';
import Tenstep from './components/Tenstep';


function App() {
  
  return (
    <Router>
    <ScrollToTop />
        <ScrollIcons />
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/10-step-skincare' component={Tenstep}></Route>
        <Route exact path='/wishlist' component={Wishlist}></Route>
        <Route exact path='/products' component={Products}></Route>
        <Route exact path='/product/:id' component={SingleProduct}></Route>
        <Route path='*' component={Error}></Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
