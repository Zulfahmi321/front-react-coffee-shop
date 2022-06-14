import { combineReducers } from "redux";
import addtocart from "../reducer/addtocart";

import counterReducers from "./counter";
import loginReducer from "./login";
import getUserDataReducer from "./userdata";
const reducers = combineReducers({
    counter: counterReducers,
    auth: loginReducer,
    cart: addtocart,
    user: getUserDataReducer
})

export default reducers