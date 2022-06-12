import { addToCartAction } from "../actionCreator/actionString";

const initialState = {
    cart: []
}

const addToCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case addToCartAction:
            return { ...state, cart: action.payload }
        default:
            return { ...state }
    }
}

export default addToCartReducer