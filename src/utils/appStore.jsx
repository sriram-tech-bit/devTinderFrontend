import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../utils/userSlice"

let appStore=configureStore({
    reducer:{
    User:UserReducer
    }
})

export default appStore