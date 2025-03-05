import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET_ALL_POSTS } from "./constant";
import axiosInstance from "../../../Axiosinstance/AxiosConfig";
import { allPostUrl } from "../../../constants/staticurl";
export const getALLPOST = createAsyncThunk(
    GET_ALL_POSTS,
    async (_, thunkAPI) => {
        try {
            const {data} = await axiosInstance.get(allPostUrl);
            return { data };
        } catch (error) {
            return thunkAPI.rejectWithValue("Failed to fetch issues.");
        }
    }
);