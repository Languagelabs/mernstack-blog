import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../redux/user/userSlice.js'; 
import counterReducer from '../redux/counter/counterSlice.js'


export const store = configureStore({
    reducer: {
        user: userReducer, 
        counter: counterReducer
    }
});