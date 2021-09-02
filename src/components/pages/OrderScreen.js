import React from 'react';
import './OrderScreen.css';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import TopBox from '../TopBox';

function OrderScreen() {
    const history = useHistory()
    const cart = useSelector(state => state.cart)
    const {shippingDetails,cartItems} = cart;
    if (!shippingDetails.address){
        history.push('/shipping')
    }

    const userState = useSelector(state => state.users)
    const {userInfo} = userState;

    const totalPrice = cartItems.reduce((a,c)=> a + c.price * c.qty,0)
    return (
        <section className="order-section">
            <TopBox first second third/>
            <div className="container order-container flex">
                <div className="order-left-sec">
                    <div className="contact-info same-div">
                        <h4>Contact <span className="info-span">{userInfo.email}</span></h4>
                    </div>

                    <div className="contact-info same-div">
                        <h4>Ship to <span className="info-span">{shippingDetails.address}</span></h4>
                    </div>

                    <div className="contact-info same-div">
                        <h4>Method <span className="info-span">Free Shipping</span></h4>
                    </div>
                </div>

                <div className="order-right-sec">
                    <div className="order-items-container flex column">
                        {cartItems.map((item)=>{
                            return (
                                <div className="order-items flex">
                                    <div className="order-img">
                                        <img src={`/${item.image}`} alt="order-img"/>
                                    </div>
                                    <div className="order-name">
                                        <h4>{item.name}</h4>
                                    </div>
                                    <div className="order-price">
                                        <h4>Rs. {item.price}.00</h4>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <div className="subtotal flex column">
                        <div className="sub-price flex">
                            <h4>Subtotal</h4>
                            <h4 className="font-bold">Rs. {totalPrice}.00</h4>
                        </div>
                        <div className="sub-price flex">
                            <h4>Shipping</h4>
                            <h4 className="font-bold">Free</h4>
                        </div>
                    </div>

                    <div className="total-price subtotal">
                    <div className="sub-price flex">
                            <h4>Total</h4>
                            <h4 className="font-bold">Rs. {totalPrice}.00</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OrderScreen
