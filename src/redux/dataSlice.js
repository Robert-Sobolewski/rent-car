import { createSlice } from "@reduxjs/toolkit";
const data = require("../data/data.json")

const dataSlice = createSlice({
name:"data",
initialState:{
    value:data
},
reducers:{
   
}
});

export default dataSlice.reducer;
export const {} = dataSlice.actions;
export const selectData = state => state.data.value