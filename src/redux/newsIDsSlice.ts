import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITheComment, ITheNews } from "src/interfaces";
import { getComments, getNewsList } from "../service/hackerNewsAPI";

interface CounterState {
    newsList: any; //! Array<ITheNews>;
    comments: any; //! Array<ITheComment>;
    readNews: number[];
    status: "success" | "loading" | "failed" | null;
    isLoadingComments: boolean;
    isShowNews: boolean;
}

const initialState: CounterState = {
    newsList: [],
    comments: [],
    readNews: [],
    status: null,
    isLoadingComments: true,
    isShowNews: false,
};

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
        openReadNews: (state, action: PayloadAction<number>) => {
            state.readNews.indexOf(action.payload) < 0 && state.readNews.push(action.payload);
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(getNewsList.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getNewsList.fulfilled, (state, action) => {
                state.newsList = action.payload;
                state.status = "success";
            })
            .addCase(getNewsList.rejected, (state) => {
                state.status = "failed";
            })

            .addCase(getComments.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getComments.fulfilled, (state, action) => {
                state.comments = action.payload;
                state.status = "success";
            })
            .addCase(getComments.rejected, (state) => {
                state.status = "failed";
            });
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
