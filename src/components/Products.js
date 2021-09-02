import React from 'react';
import './Products.css';
import ProductCard from './ProductCard';
import {useSelector} from 'react-redux';

function Products() {
    const products = useSelector(state => state.products)
    const {allProducts,loading} = products;
    return (
        <>
        <h1 className="text-center my-2">Our Products</h1>
        <div className="container products-container flex py-2">
            {loading ? <h3 className="my-3"><i className="fas fa-spinner"></i> Loading...</h3>
                : 
                allProducts.map((prod)=>{
                return (
                    <ProductCard key={prod._id} prod={prod}/>
                )
            })
            }

        </div>
        </>
    )
}

export default Products
