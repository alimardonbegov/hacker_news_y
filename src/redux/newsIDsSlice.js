import { createSlice } from "@reduxjs/toolkit";
import { getNewsIds } from "../service/hackerNewsAPI";

const initialState = {
    newsList: [],
    status: null,
    isShowNews: true,
};
// abegov

export const newsIDsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {
        showNews: (state) => {
            state.isShowNews = false;
        },
        hideNews: (state) => {
            state.isShowNews = true;
        },
    },

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

export const { showNews, hideNews } = newsIDsSlice.actions;
