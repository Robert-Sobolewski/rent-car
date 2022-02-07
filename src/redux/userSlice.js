import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
name:"user",
initialState:{
    value:'bob'
},
reducers:{
   
    login: (state, action) => {
        state.value = action.payload;

    },
    logout: (state, action) => {
        state.value = ""
    }
    
}
});



export default userSlice.reducer;
export const {login, logout} = userSlice.actions;
export const selectUser = state => state.user.value