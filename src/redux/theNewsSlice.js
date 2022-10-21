// import { createSlice } from "@reduxjs/toolkit";
// import { getListOfNews } from "../service/hackerNewsAPI";

// const initialState = {
//     listOfNews: [],
//     status: null,
// };

// export const theNewsSlice = createSlice({
//     name: "news",
//     initialState,
//     extraReducers: {
//         [getListOfNews.pending]: (state) => {
//             state.status = "loading";
//         },
//         [getListOfNews.fulfilled]: (state, action) => {
//             state.listOfNews = action.payload;
//             state.status = "success";
//         },
//         [getListOfNews.rejected]: (state) => {
//             state.status = "failed";
//         },
//     },
// });
