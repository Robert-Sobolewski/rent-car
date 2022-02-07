import { createSlice } from "@reduxjs/toolkit";
const data = require("../data/data.json")

const dataSlice = createSlice({
name:"data",
initialState:{
    value:data,
    current: [data[0]]
},
reducers:{
   find: (state, action)=>{
        state.current =state.value.filter( item => item.id=== parseInt(action.payload))
   }
}
});



export default dataSlice.reducer;
export const {find} = dataSlice.actions;
export const selectData = state => state.data.value
export const currentCar = state => state.data.current;