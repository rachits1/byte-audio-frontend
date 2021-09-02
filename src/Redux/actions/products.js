import axios from 'axios';
const url = "https://byte-audio.herokuapp.com/products";

export const getProductsData = ()=>{
    return async (dispatch)=>{
        try {
            dispatch({type: "FETCH_REQUEST"})
            const {data} = await axios.get(url);
            dispatch({type: "FETCH_SUCCESS",payload: data})
        } catch (error) {
            dispatch({type: "FETCH_FAIL",payload: error.response.data.message})
        }
    }
}

export const getProdDetails = (id)=>{
    return async (dispatch)=>{
        try {
            dispatch({type: "GET_DETAILS_REQUEST",payload: id})
            const {data} = await axios.get(`${url}/${id}`)
            dispatch({type: "GET_DETAILS_SUCCESS",payload: data})
        } catch (error) {
            dispatch({type: "GET_DETAILS_FAILURE",payload: error.response.data.message})
        }
    }
}