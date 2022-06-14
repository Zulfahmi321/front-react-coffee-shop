import { FULFILLED, getUserDataString, logoutString, PENDING, REJECTED } from "../actionCreator/actionString"

const initialState = {
    data: [],
    isLoading: false,
    err: null,
    isSuccess: null,
    isLoggedIn: false
}

const getUserDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case getUserDataString + PENDING:
            return { ...state, error: null, isLoading: true }
        case getUserDataString + FULFILLED:
            return { ...state, isLoading: false, data: action.payload.data.data.data[0], isSuccess: true, isLoggedIn: true }
        case getUserDataString + REJECTED:
            return { ...state, error: action.payload.data, isLoading: false, isSuccess: false }
        case logoutString:
            return { ...initialState }
        default:
            return { ...state };
    }
}

export default getUserDataReducer

