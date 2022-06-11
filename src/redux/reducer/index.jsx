import { combineReducers } from "redux";

import counterReducers from "./counter";
import loginReducer from "./login";
const reducers = combineReducers({
    counter: counterReducers,
    auth: loginReducer
})

export default reducers