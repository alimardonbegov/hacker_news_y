import { createSlice } from "@reduxjs/toolkit";
import { getNewsIds } from "../service/hackerNewsAPI";

const initialState = {
    newsList: [],
    status: null,
    secondsUpdateInterval: 60,
    newsCount: 3, // This number with deleted or dead news. Web app shows only real news
    showCards: false,
};
// abegov

export const newsIDsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {
        showCards: (state) => {
            state.showCards = true;
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

export const { showCards } = newsIDsSlice.actions;
