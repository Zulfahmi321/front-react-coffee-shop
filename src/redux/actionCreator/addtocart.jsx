import { addToCartAction } from "../actionCreator/actionString";

export const addToCart = (product, size, delivery) => {
    return {
        type: addToCartAction,
        payload: product,
        size: size,
        delivery: delivery
    }
}
