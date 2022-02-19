import { listAddressFilterRuducer } from './test/testReducer';
import { combineReducers } from "redux";
import auth from './auth/authReducer';
import alert from './alert/alertReducer';
import blog from './blog/blogReducer';
import category from './category/categoryReducer'

const rootReducer = combineReducers({
    listAddressFilterRuducer,
    auth,
    alert,
    blog,
    category
})

export default rootReducer