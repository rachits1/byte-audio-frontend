import {combineReducers} from 'redux';
import {productsReducer,prodDetailsReducer} from './products';
import {usersReducer} from './users';
import {cartReducer} from './cart';

const reducers = combineReducers({
    products: productsReducer,
    prodDetails: prodDetailsReducer,
    cart: cartReducer,
    users: usersReducer
})

export default reducers