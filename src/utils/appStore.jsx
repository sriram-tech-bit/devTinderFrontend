import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../utils/userSlice"
import FeedReducer from "../utils/FeedSlice"
import  ConnectionsReducer   from "../utils/connectionSlice"
import RequestReducer from "../utils/requestSlice"
let appStore=configureStore({
    reducer:{
    User:UserReducer,
    Feed:FeedReducer,
    Connections:ConnectionsReducer,
    Request:RequestReducer
    }









})

export default appStore