import { createSlice } from "@reduxjs/toolkit";
import { getComments, getNewsList } from "../service/hackerNewsAPI";

const initialState = {
    newsList: [],
    comments: [],
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
        [getNewsList.pending]: (state) => {
            state.status = "loading";
        },
        [getNewsList.fulfilled]: (state, action) => {
            state.newsList = action.payload;
            state.status = "success";
        },
        [getNewsList.rejected]: (state) => {
            state.status = "failed";
        },

        [getComments.pending]: (state) => {
            state.status = "loading";
        },
        [getComments.fulfilled]: (state, action) => {
            state.comments = action.payload;
            state.status = "success";
        },
        [getComments.rejected]: (state) => {
            state.status = "failed";
        },
    },
});

export const { showNews, hideNews } = newsIDsSlice.actions;
