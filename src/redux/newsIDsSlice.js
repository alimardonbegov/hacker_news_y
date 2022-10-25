import { createSlice } from "@reduxjs/toolkit";
import { getComments, getNewsList } from "../service/hackerNewsAPI";

const initialState = {
    newsList: [],
    comments: [],
    readNews: [],
    status: null,
    isLoadingComments: true,
    isShowNews: false,
};
// abegov

export const newsIDsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {
        showNews: (state) => {
            state.isShowNews = true;
        },
        hideNews: (state) => {
            state.isShowNews = false;
        },
        startLoadingComments: (state) => {
            state.isLoadingComments = true;
        },
        finishLoadingComments: (state) => {
            state.isLoadingComments = false;
        },

        clearComments: (state) => {
            state.comments = [];
        },
        openReadNews: (state, action) => {
            state.readNews.indexOf(action.payload) < 0 && state.readNews.push(action.payload);
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

export const {
    showNews,
    hideNews,
    clearComments,
    startLoadingComments,
    finishLoadingComments,
    openReadNews,
} = newsIDsSlice.actions;
