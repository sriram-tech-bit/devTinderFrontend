import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../utils/userSlice"
import FeedReducer from "../utils/FeedSlice"
let appStore=configureStore({
    reducer:{
    User:UserReducer,
    Feed:FeedReducer
    }
    








})

export default appStore