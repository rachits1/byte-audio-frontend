import React from 'react';
import './Footer.css';

function Footer(){
    return (
        <section className="container ftr-container">
            <div className="ftr-header">
                <div className="container ftr-header-container flex">
                    <div className="ftr-head-icons m-2">
                        <h3><i class="fas fa-truck"></i> Free Shipping</h3>
                    </div>

                    <div className="ftr-head-icons m-2">
                        <h3><i class="fas fa-tag"></i> Exclusive Deals</h3>
                    </div>

                    <div className="ftr-head-icons m-2">
                        <h3><i class="fas fa-shield-alt"></i> Secure Checkout</h3>
                    </div>
                </div>
            </div>

            <div className="container flex py-2 ftr-sub-container">
                <div className="email-subscription flex">
                    <h1 className="logo">by<span className="logo-red">t</span>e</h1>
                    <p className="my-2">Subscribe to email alerts. We promise not to spam your inbox.</p>
                    <div className="flex ftr-flex">
                        <input type="text" placeholder="Email"/>
                        <button className="btn btn-primary subscribe-btn">SUBSCRIBE</button>
                    </div>
                </div>

                <div className="flex ul-flex">
                    <div className="same-ul">
                        <h3>SHOP</h3>
                        <ul className="ftr-ul py-1">
                            <li>True Wireless Earbuds</li>
                            <li>Wireless Headphones</li>
                            <li>Wired Headphones</li>
                            <li>Wireless Speakers</li>
                        </ul>
                    </div>

                    <div className="same-ul">
                        <h3>HELP</h3>
                        <ul className="ftr-ul py-1">
                            <li>Track Your Order</li>
                            <li>Warranty & Support</li>
                            <li>Return Policy</li>
                        </ul>
                    </div>

                    <div className="same-ul">
                        <h3>COMPANY</h3>
                        <ul className="ftr-ul py-1">
                            <li>About byTe</li>
                            <li>News</li>
                            <li>Read Our Blog</li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className="text-center py-1 sm-font">&#169; 2021 byTe Private Limited. All Rights Reserved.</p>
        </section>
    )
}

export default Footer;