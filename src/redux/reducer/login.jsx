import { PENDING, FULFILLED, REJECTED, loginString, logoutString } from "../actionCreator/actionString";


const initialState = {
    userInfo: [],
    isLoading: false,
    error: null,
    isSuccess: false,
    isLoggedIn: false
}
const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case loginString + PENDING:
            return { ...state, error: null, isLoading: true }
        case loginString + FULFILLED:
            return { ...state, isLoading: false, userInfo: action.payload.data.data, isSuccess: true, isLoggedIn: true }
        case loginString + REJECTED:
            return { ...state, error: action.payload.response.data.err.msg, isLoading: false, isSuccess: false }
        case logoutString:
            return { ...initialState }
        default:
            return state;
    }
}

export default loginReducer