import { addToCartAction, resetCartAction } from "./actionString"


export const addToCart = (product, size, delivery) => {
    return {
        type: addToCartAction,
        payload: product,
        size: size,
        delivery: delivery
    }
}

export const resetCart = () => {
    return {
        type: resetCartAction,
    }
}
