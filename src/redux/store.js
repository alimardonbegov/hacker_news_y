import { configureStore } from "@reduxjs/toolkit";
import { newsIDsSlice } from "./newsIDsSlice";

export const store = configureStore({
    reducer: {
        news: newsIDsSlice.reducer,
    },
});
