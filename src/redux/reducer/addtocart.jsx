import { addToCartAction, resetCartAction } from "../actionCreator/actionString";

const initialState = {
    cart: [],
    size: '',
    delivery: ''
}

const addToCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case addToCartAction:
            return { ...state, cart: action.payload, size: action.size, delivery: action.delivery }
        case resetCartAction:
            return { ...initialState }
        default:
            return { ...state }
    }
}

export default addToCartReducer