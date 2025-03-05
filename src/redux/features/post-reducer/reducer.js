import { createSlice } from "@reduxjs/toolkit";
import { initialState, POST } from "./constant";
import { getALLPOST } from "./action";

const postReducer=createSlice({
    name:POST,
    initialState:initialState,
  
    extraReducers:(builder)=>{
        builder
        .addCase(getALLPOST.pending, (state) => {
          state.loading = true;
          state.error = "";
        })
        .addCase(getALLPOST.fulfilled, (state, action) => {
          const { data } = action.payload;
          state.loading = false;
          state.posts = data;
          state.error = "";
        })
        .addCase(getALLPOST.rejected, (state, action) => {
          state.loading = false;
          state.posts = [];
          state.error = action.error.message || "Something went wrong";
        });
    }
})

export default postReducer.reducer;