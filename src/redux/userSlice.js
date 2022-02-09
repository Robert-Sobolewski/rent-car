import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
name:"user",
initialState:{
    value:'bob',
    pick_date: "",
    drop_date: "",
    pick_time: "",
    pick_location: "",
    drop_location: "",
    car_id: "8",
    price_h:0,
    price_d:82.78,
    price_m:0
},
reducers:{
   
    login: (state, action) => {
        state.value = action.payload;

    },
    logout: (state, action) => {
        state.value = ""
    },
    setPickLoc : (state, action) =>{
        state.pick_location = action.payload;
    }
}
});



export default userSlice.reducer;
export const {login, logout,setPickLoc} = userSlice.actions;
export const selectUser = state => state.user.value