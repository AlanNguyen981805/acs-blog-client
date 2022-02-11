import { AUTH, AUTH_ERROR, AUTH_SUCCESS, IAuth, IAuthType, LOGOUT } from "./type"

let a = typeof window !== "undefined" && localStorage.getItem("user") !== null ? JSON.parse(localStorage.getItem("user") as any) : {}
const authReducer = (state: IAuth = a, action: IAuthType) => {
    switch(action.type) {
        case AUTH: 
            return {
                ...state,
                loading: true,
                error: {}
            }
        
        case AUTH_SUCCESS:
            // console.log(action.payload)
            localStorage.setItem("user", JSON.stringify(action.payload))

            return {
                ...state,
                loading: false,
                access_token: action.payload.access_token,
                refresh_token: action.payload.refresh_token,
                error: {}
            }
        
        case AUTH_ERROR:
            return {
                ...state,
                error: action.payload,
                access_token: '',
                loading: false
            }
        case LOGOUT: 
            localStorage.removeItem("user")
            return {}
        default: 
            return state
        
    }
}

export default authReducer