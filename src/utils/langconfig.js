import { createSlice } from "@reduxjs/toolkit";

const langconfig=createSlice({
    name:"lang",
    initialState:{
        lang:"en",
    },
    reducers:{
        addLangStatus:(state,action)=>{
            state.lang=action.payload;
        }
    }
})
export const {addLangStatus}=langconfig.actions;
export default langconfig.reducer;