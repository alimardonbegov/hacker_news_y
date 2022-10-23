import { createSlice } from "@reduxjs/toolkit";
import { getNewsIds } from "../service/hackerNewsAPI";

const initialState = {
    newsList: [],
    status: null,
};
// abegov

export const newsIDsSlice = createSlice({
    name: "news",
    initialState,
    extraReducers: {
        [getNewsIds.pending]: (state) => {
            state.status = "loading";
        },
        [getNewsIds.fulfilled]: (state, action) => {
            state.newsList = action.payload;
            state.status = "success";
        },
        [getNewsIds.rejected]: (state) => {
            state.status = "failed";
        },
    },
});

export const { showCards } = newsIDsSlice.actions;
