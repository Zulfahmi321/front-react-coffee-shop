import { addToCartAction } from "../actionCreator/actionString";

export const addToCart = (product) => {
    return {
        type: addToCartAction,
        payload: product
    }
}
