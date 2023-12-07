import { GET_CART_DATA, ADD_PRODUCT, ADD_TO_CART, GET_CART_DATA_FAILURE, GET_CART_DATA_SUCCESS, GET_PRODUCTS, GET_PRODUCTS_FAILURE, GET_PRODUCTS_SUCCESS, EDIT_PRODUCT_DATA, DELETE_CART_DATA } from "./actionType"

export const getProductsData = () => {
    return ({type: GET_PRODUCTS})
}

export const getProductsDataFailure = () => {
    return ({type: GET_PRODUCTS_FAILURE})
}

export const getProductsDataSuccess = (payload) => {
    return ({type: GET_PRODUCTS_SUCCESS, payload})
}

export const addToCart = (payload) => {
    return ({type: ADD_TO_CART, payload})
}

export const getCartData = () => {
    return ({type: GET_CART_DATA})
}

export const getCartDataFailure = () => {
    return ({type: GET_CART_DATA_FAILURE})
}

export const getCartDataSuccess = (payload) => {
    return ({type: GET_CART_DATA_SUCCESS, payload})
}


export const deleteCartData = (payload) => {
    return ({type: DELETE_CART_DATA, payload})
}