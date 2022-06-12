import { combineReducers } from "redux";
import addtocart from "../reducer/addtocart";

import counterReducers from "./counter";
import loginReducer from "./login";
const reducers = combineReducers({
    counter: counterReducers,
    auth: loginReducer,
    cart: addtocart
})

export default reducers