export const productsReducer = (state = {allProducts: []},action)=>{
    switch(action.type){
        case "FETCH_REQUEST":
            return {loading: true}
        case "FETCH_SUCCESS":
            return {loading: false, allProducts: action.payload}
        case "FETCH_FAIL":
            return {loading: false,error: action.payload}
        default:
            return state
    }
}

export const prodDetailsReducer = (state = {productDetail: {}},action)=>{
    switch(action.type){
        case "GET_DETAILS_REQUEST":
            return {loading: true}
        case "GET_DETAILS_SUCCESS":
            return {loading: false, productDetail: action.payload}
        case "GET_DETAILS_FAIL":
            return {loading: false,error: action.payload}
        default:
            return state
    }
}