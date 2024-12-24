import { createSlice } from "@reduxjs/toolkit";

const videoSlice =createSlice({
    name:"video",
    initialState:{
        popularVideo:null,
    },

    reducers:{
        addPopolarVideos:(state,action)=>{
            state.popularVideo=action.payload;
        },
    }

});

export const {addPopolarVideos} =videoSlice.actions;

export default videoSlice.reducer;