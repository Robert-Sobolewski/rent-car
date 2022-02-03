import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../components/counter/counterSlice'
import dataReducer from './dataSlice';


const store = configureStore({
    reducer:{
        counter: counterReducer,
        data: dataReducer,
    }
})
export default store;
