import { ALERT_ERROR, ALERT_SUCCESS, IAlert, IAlertType } from "./type";

const initialState = {
    success: null,
    error: null
}
const alertReducer = (state: IAlert = {}, action: IAlertType) => {
    switch (action.type) {
        case ALERT_SUCCESS:
            return {
                ...state,
                success: action.payload
            }
        case ALERT_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

export default alertReducer