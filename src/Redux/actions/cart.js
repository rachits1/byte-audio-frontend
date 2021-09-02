import axios from 'axios';
const url = "https://byte-audio.herokuapp.com/products";

export const addToCart = (id,qty)=>{
    return async (dispatch,getState)=>{
        try {

            const {data} = await axios.get(`${url}/${id}`)
            dispatch({type: "ATC_SUCCESS",payload :{
                name: data.name,
                image: data.image,
                price: data.price,
                countInStock: data.countInStock,
                product: data._id,
                qty: qty
            }})
            localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
        } catch (error) {
            console.log(error.message)
        }
    }
}

export const removeFromCart = (id)=>{
    return (dispatch,getState)=>{
        try {
            dispatch({type: "REMOVE_FROM_CART",payload: id})
            localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
        } catch (error) {
            console.log(error.message);
        }
    }
}

export const saveShippingDetails = (name,address,city,postalCode,country)=>{
    return (disptach,getState)=>{
        disptach({type: "SAVE_SHIPPING_DETAILS",payload: {name,address,city,postalCode,country}})
        localStorage.setItem('shippingDetails',JSON.stringify(getState().cart.shippingDetails))
    }
}