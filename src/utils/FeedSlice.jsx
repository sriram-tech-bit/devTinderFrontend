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
        return state.filter((r)=>r._id!==action.payload)
    }

 }



})

export const {addFeed,removeFeed}=FeedSlice.actions
export default FeedSlice.reducer
