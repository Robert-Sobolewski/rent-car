import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
name:"counter",
initialState:{
    value:10
},
reducers:{
    add: (state)=> {state.value+=1},
    minus: (state)=>{state.value-=1}
}
});

export default counterSlice.reducer;
export const {add, minus} = counterSlice.actions;
export const selectCounter = state => state.counter.value