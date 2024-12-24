import { createSlice } from "@reduxjs/toolkit";

const appSlice= createSlice({
    name: "app",
    initialState: {
        isMenuOpenFlag:true,
        
    },

    reducers:{
        toggleMenuState:(state,action)=>{
            state.isMenuOpenFlag=(!state.isMenuOpenFlag)
        },
        closeMenu:(state)=>{
            state.isMenuOpenFlag=false;
        }
    }
})

export const {toggleMenuState ,closeMenu }=appSlice.actions;

export default appSlice.reducer;