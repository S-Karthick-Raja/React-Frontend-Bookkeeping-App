import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { createBookReducer } from '../reducers/books/createBookReducer';
import { booksListReducer } from '../reducers/books/bookListResucer';
import { userReducer } from '../reducers/users/userAuthReducer';
import { userProfileReducer } from '../reducers/users/userProfileReducer';
import { userUpdateReducer } from '../reducers/users/userUpdateReducer';


const middleware = [thunk];

const reducer = combineReducers({
    bookCreated: createBookReducer,
    booksList: booksListReducer,
    userLogin: userReducer,
    userProfile : userProfileReducer,
    updatedUser: userUpdateReducer,
});

//Get user from localstorage and save it into our store

const userAuthFromStorage = localStorage.getItem('userAuthData')
    ? JSON.parse(localStorage.getItem('userAuthData'))
    : null;

const initialState = {
    userLogin: { userInfo: userAuthFromStorage },
};

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);


export { store }; 