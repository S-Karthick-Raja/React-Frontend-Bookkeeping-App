import axios from "axios";
import { API_URL } from "../../../Global-Constant/globalConstant";
import {
    CREATE_BOOK_FAIL,
    CREATE_BOOK_REQUEST,
    CREATE_BOOK_SUCCESS,
    FETCH_BOOK_REQUEST,
    FETCH_BOOK_FAIL,
    FETCH_BOOK_SUCCESS
} from "./actionTypes";

const createBookAction = (bookData) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: CREATE_BOOK_REQUEST,
            });
            const config = {
                "Content-Type": "application/json",
            };

            const { data } = await axios.post(`${API_URL}/api/books`, bookData, config);

            dispatch({
                type: CREATE_BOOK_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: CREATE_BOOK_FAIL,
                payload: error.response && error.response.data.message,
            });
        }
    };
};

// Fetch Book
const fetchBooksAction = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type: FETCH_BOOK_REQUEST,
                loading: true,
            });
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            // make http call to our backend
            const { data } = await axios.get(`${API_URL}/api/books`, config);

            dispatch({
                type: FETCH_BOOK_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: FETCH_BOOK_FAIL,
                error: error.response && error.response.data.message,
            });
        }
    };
};


export { createBookAction, fetchBooksAction };
