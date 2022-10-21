import { createSlice } from "@reduxjs/toolkit";
import { getNewsIds } from "../service/hackerNewsAPI";

const initialState = {
    newsIds: [],
    status: null,
    secondsUpdateInterval: 60,
};

export const newsIDsSlice = createSlice({
    name: "newsIds",
    initialState,
    extraReducers: {
        [getNewsIds.pending]: (state) => {
            state.status = "loading";
        },
        [getNewsIds.fulfilled]: (state, action) => {
            state.newsIds = action.payload;
            state.status = "success";
        },
        [getNewsIds.rejected]: (state) => {
            state.status = "failed";
        },
    },
});
