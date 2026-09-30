import { createSlice } from "@reduxjs/toolkit";

let connectionSlice=createSlice({
 name:"connections",
 initialState:null,
 reducers:{
    addConnections:(state,action)=>{
       return action.payload
    },
    removeConnections:(state,action)=>{
      return  null
    }
 }

})
export const {addConnections,removeConnections}=connectionSlice.actions
export default connectionSlice.reducer