import { listAddressFilterRuducer } from './test/testReducer';
import auth from './auth/authReducer';
import alert from './alert/alertReducer';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    listAddressFilterRuducer,
    auth,
    alert
})

export default rootReducer