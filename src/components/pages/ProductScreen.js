import React,{useEffect,useState} from 'react';
import './ProductScreen.css';
import {useDispatch,useSelector} from 'react-redux';
import {getProdDetails} from '../../Redux/actions/products';
import {useHistory} from 'react-router-dom';
import {addToCart} from '../../Redux/actions/cart';
import Rating from '../Rating'

function ProductScreen(props) {
    const [qty,setQty] = useState(1);
    const prodId = props.match.params.id;
    console.log(prodId)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getProdDetails(prodId))
    },[dispatch,prodId])

    const prodDetailsState = useSelector(state => state.prodDetails)
    const {loading, productDetail} = prodDetailsState;


    const savedPrice = productDetail ? productDetail.mrp - productDetail.price : null
    const savedPercent = productDetail ? Math.floor((savedPrice / productDetail.mrp) * 100) : null

    const history = useHistory()
    function handleAtc(){
        dispatch(addToCart(prodId,qty))
        history.push(`/cart/${prodId}?qty=${qty}`)
    }

    return (
        <div className="container prodDetails-container flex">
            {loading ? <div className="loading-box flex"><h2 className="text-center"><i className="fas fa-spinner"></i> Loading...</h2></div>
                :
            <>
                <div className="prodImage">
                    <img src={`/${productDetail.image}`} alt="prodImg" />
                </div>

                <div className="prodContent p-2">
                    <h1>{productDetail.name}</h1>
                    <Rating rating={productDetail.rating} numReviews={productDetail.numReviews} />
                    <div className="prodPrice flex">
                        <h3 className="price">Rs. {productDetail.price}.00</h3>
                        <h3 className="real-price">Rs. {productDetail.mrp}.00</h3>
                    </div>
                    <h3 className="discount"><span className="savedText">YOU SAVE </span> {savedPercent} %</h3>
                    {productDetail.countInStock > 0 ? 
                        <>
                        <p className="inStock">In Stock</p>
                            <div className="prodQty flex my-1">
                                <h3>Quantity</h3>
                                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                                    {[...Array(productDetail.countInStock).keys()].map((x)=>{
                                        return (
                                            <option key={x + 1} value={x + 1}>{x + 1}</option>
                                        )
                                    })}
                                </select>
                            </div>

                            <button className="btn atc-btn my-2" onClick={handleAtc}>ADD TO CART</button>
                        </>

                        :
                        <>
                            <p className="outOfStock">Out of Stock</p>
                            <button disabled={productDetail.countInStock = 0} className="btn atc-btn btn-disabled my-1">ADD TO CART</button>
                        </>
                    }

                </div>
            </>
            }

        </div>
    )
}

export default ProductScreen;
