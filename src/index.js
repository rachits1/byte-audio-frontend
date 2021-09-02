import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore,applyMiddleware,compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './Redux/reducers';

const initState = {
  cart: {
    cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
    shippingDetails: localStorage.getItem('shippingDetails') ? JSON.parse(localStorage.getItem('shippingDetails')) : {}
  },
  users: {
    userInfo: localStorage.getItem('usersInfo') ? JSON.parse(localStorage.getItem('usersInfo')) : null
  }
}

const store = createStore(reducers,initState,compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

ReactDOM.render(
    <Provider store = {store}>
      <App />
    </Provider>,
  document.getElementById('root')
);

