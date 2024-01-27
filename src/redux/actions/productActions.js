import fakeStoreApi from "../../apis/fakeStoreApi";
import { ActionTypes } from "../constants/action-types";

export const fetchProducts = () =>  async (dispatch) => {
        const response = await fakeStoreApi.get("/products");
        console.log(response);

        dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });

    // return {
    //     type: ActionTypes.SET_PRODUCTS,
    //     payload: response,
    // };
};

export const fetchProduct = (id) =>  async (dispatch) => {
    const response = await fakeStoreApi.get(`/products/${id}`);
    console.log(response);

    dispatch({ type: ActionTypes.SELECTED_PRODUCTS, payload: response.data });

// return {
//     type: ActionTypes.SET_PRODUCTS,
//     payload: response,
// };
};

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    };
};

export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCTS,
        payload: product,
    };
};

export const removeSelectedProduct = (product) => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
    };
};