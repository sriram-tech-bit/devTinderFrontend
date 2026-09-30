import { createSlice } from "@reduxjs/toolkit";
import reducer from "./userSlice";

let FeedSlice=createSlice({
 name:"Feed",
 initialState:null,
 reducers:{
    addFeed:(state,action)=>{
        return action.payload
    },
    removeFeed:(state,action)=>{
        return null
    }

 }



})

export const {addFeed,removeFeed}=FeedSlice.actions
export default FeedSlice.reducer
