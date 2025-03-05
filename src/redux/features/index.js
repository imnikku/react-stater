import { combineReducers } from "@reduxjs/toolkit";
import postReducer from "./post-reducer/reducer";

const rootReducer = combineReducers({
    posts: postReducer
})

export default rootReducer;