import React from 'react';
import './ProductCard.css';
import {Link} from 'react-router-dom';

function ProductCard({prod}) {
    return (
        <Link to={`/products/${prod._id}`} className="link">
        <div className="card-container">
            <div className="card-img">
                <img src={prod.image} alt="prod1"/>
                <div className="card-img-content p-1">
                    <h4>{prod.prodType}</h4>
                </div>
            </div>
            <div className="card-body p-2">
                <h3 className="prod-name">{prod.name}</h3>
                <div className="flex price-flex py-1">
                    <h4 className="price">Rs. {prod.price}.00</h4>
                    <h4 className="real-price">Rs. {prod.mrp}.00</h4>
                </div>
                <ul className="card-list">
                    {prod.tags.map((tag)=>{
                        return (
                            <li>{tag}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
        </Link>
    )
}

export default ProductCard
