import { configureStore } from "@reduxjs/toolkit";
import Token from "../reducers/Token";
import NavData from '../reducers/NavigationData';
export default configureStore({
    reducer:{
        Token,
        NavData
    },
});