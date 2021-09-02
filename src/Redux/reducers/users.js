export const usersReducer = (state = {userInfo: {}},action)=>{
    switch(action.type){
        case "USER_LOGIN_SUCCESS":
            return {userInfo : action.payload}
        case "USER_LOGIN_FAIL":
            return {error: action.payload}
        case "LOGOUT":
            return {}
        default:
            return state
    }
}

export const registerReducer = (state = {userInfo: {}},action)=>{
    switch(action.type){
        case "USER_REGISTER_SUCCESS":
            return {userInfo : action.payload}
        case "USER_REGISTER_FAIL":
            return {error: action.payload}
        case "LOGOUT":
            return {}
        default:
            return state
    }
}