import { AUTH, AUTH_ERROR, AUTH_SUCCESS, IAuth, IAuthType } from "./type"

const authReducer = (state: IAuth = {}, action: IAuthType) => {
    switch(action.type) {
        case AUTH: 
            return {
                ...state,
                loading: true,
                error: {}
            }
        
        case AUTH_SUCCESS:
            localStorage.setItem("logged", "true")
            return {
                ...state,
                loading: false,
                access_token: action.payload.access_token,
                error: {}
            }
        
        case AUTH_ERROR:
            return {
                ...state,
                error: action.payload,
                access_token: '',
                loading: false
            }
        
        default: 
            return state
        
    }
}

export default authReducer