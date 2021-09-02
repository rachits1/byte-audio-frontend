import axios from 'axios';
const url = 'https://byte-audio.herokuapp.com/users'

export const getUserInfo = (email,password)=>{
    return async (dispatch)=>{
        try {
            const {data} = await axios.post(`${url}/signin`,{email,password})
            dispatch({type: "USER_LOGIN_SUCCESS",payload: data})
            localStorage.setItem('usersInfo',JSON.stringify(data))
        } catch (error) {
            dispatch({type: "USER_LOGIN_FAIL",payload: error.response.data.message})
        }
    }
}

export const getRegisterInfo = (name,email,password)=>{
    return async (dispatch)=>{
        try {
            const {data} = await axios.post(`${url}/register`,{name,email,password})
            dispatch({type: "USER_REGISTER_SUCCESS",payload: data})
            dispatch({type: "USER_LOGIN_SUCCESS",payload: data})
            localStorage.setItem('usersInfo',JSON.stringify(data))
        } catch (error) {
            dispatch({type: "USER_REGISTER_FAIL",payload: error.response.data.message})
        }
    }
}


export const logoutUser = ()=>{
    return (dispatch)=>{
        dispatch({type: "LOGOUT_USER"})
        localStorage.removeItem('usersInfo')
        localStorage.removeItem('cartItems')
        localStorage.removeItem('shippingData')
    }
}