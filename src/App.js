import React,{useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Switch,Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Footer from './components/Footer';
import ProductScreen from './components/pages/ProductScreen';
import CartScreen from './components/pages/CartScreen';
import SignInScreen from './components/pages/SignInScreen';
import RegisterScreen from './components/pages/RegisterScreen';
import ShippingScreen from './components/pages/ShippingScreen';
import OrderScreen from './components/pages/OrderScreen';
import {getProductsData} from './Redux/actions/products';
import {useDispatch} from 'react-redux';

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getProductsData())
  },[dispatch])
  
  return (
    <BrowserRouter>
      <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products/:id" exact component={ProductScreen} />
          <Route path="/cart/:id?" exact component={CartScreen} />
          <Route path="/signin" exact component={SignInScreen} />
          <Route path="/register" exact component={RegisterScreen} />
          <Route path="/shipping" exact component={ShippingScreen} />
          <Route path="/orders" exact component={OrderScreen} />
        </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
