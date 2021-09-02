import React from 'react';
import './TopBox.css';

function TopBox({first,second,third}) {
    return (
        <div className="container topbox-container flex py-1">
            <div className={first ? 'active' : ''}>Sign In</div>
            <div className={second ? 'active' : ''}>Shipping</div>
            <div className={third ? 'active' : ''}>Place Order</div>
        </div>
    )
}

export default TopBox
