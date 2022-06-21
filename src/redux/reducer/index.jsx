import { combineReducers } from "redux";
import addToCartReducer from "../reducer/addtocart";
// import addtocart from "../reducer/addtocart";

import counterReducers from "./counter";
import loginReducer from "./login";
import getUserDataReducer from "./userdata";
const reducers = combineReducers({
    counter: counterReducers,
    auth: loginReducer,
    cart: addToCartReducer,
    user: getUserDataReducer
})

export default reducers