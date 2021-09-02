import React from 'react';
import './CartScreen.css';
import {useSelector,useDispatch} from 'react-redux';
import {Link,useHistory} from 'react-router-dom';
import {addToCart,removeFromCart} from '../../Redux/actions/cart'

function CartScreen() {
    const dispatch = useDispatch()
    const cartState = useSelector(state => state.cart)
    const {cartItems} = cartState;

    const totalPrice = cartItems.reduce((a,c) => a + c.price * c.qty,0)
    const history = useHistory()
    function handleCheckout(){
        history.push('/signin?redirect=shipping')
    }
    return (
        <section className="cart-section py-2">
            <h1 className="text-center">Your Cart</h1>
            {
                cartItems.length === 0 ?
                    <div className="cart-empty flex">
                    <h3 className="text-center my-1">Cart is Empty <i className="far fa-frown"></i></h3>
                    <Link to='/' className="link continue-shop text-center">Go Shopping !</Link>
                    </div>
                :
                <div className="container cart-items-container py-2 flex">
 
                    {cartItems.map((item)=>{
                        return (
                            <div className="individualItem flex">
                                <div className="removeItem">
                                    <button className="btn delete-btn" onClick={()=> dispatch(removeFromCart(item.product))}><i className="fas fa-times"></i></button>
                                </div>
                                <div className="cartImg">
                                    <img src={`/${item.image}`} alt="itemImg" />
                                </div>
                                <div className="item-media flex">
                                    <div className="itemName">
                                        <h3>{item.name}</h3>
                                    </div>

                                    <div className="itemQty">
                                        <select value={item.qty} onChange={(e)=> dispatch(addToCart(item.product,Number(e.target.value)))}>
                                            {[...Array(item.countInStock).keys()].map((x)=>{
                                                return (
                                                    <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                </div>

                                <div className="itemPrice flex">
                                    <h3>Rs. {item.price * item.qty}.00</h3>
                                </div>
                            </div>
                        )
                    })}
                    <div className="totalPrice flex py-2">
                        <h2>Total: Rs. {totalPrice}.00</h2>
                        <div className="checkoutBtn-container">
                            <button className="btn checkout-btn my-2" onClick={handleCheckout}>Check Out</button>
                        </div>
                        <Link to='/' className="link continue-shop">Continue Shopping</Link>
                    </div>      
                </div>
            }
        </section>
    )
}

export default CartScreen;
