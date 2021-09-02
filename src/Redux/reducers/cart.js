export const cartReducer = (state = {cartItems: []},action)=>{
    switch(action.type){
        case "ATC_SUCCESS":
            const itemToAdd = action.payload
            const itemAlreadyExists = state.cartItems.find((item)=> item.product === itemToAdd.product)
            if (itemAlreadyExists){
                // Replace new with old
                return {...state,cartItems: state.cartItems.map((x)=> x.product === itemAlreadyExists.product ? itemToAdd : x)}
            } else {
                // Add the new item
                return {...state, cartItems: [...state.cartItems,itemToAdd]}
            }
        case "SAVE_SHIPPING_DETAILS":
            return {...state,shippingDetails: action.payload}
        case "REMOVE_FROM_CART":
            return {...state, cartItems: state.cartItems.filter((item)=> item.product !== action.payload)}
        default:
            return state
    }
}