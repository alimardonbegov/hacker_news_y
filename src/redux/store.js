import { configureStore } from "@reduxjs/toolkit";
import { newsIDsSlice } from "./newsIDsSlice";
import { navScrollSlice } from "./navScrollSlice";

export const store = configureStore({
    reducer: {
        news: newsIDsSlice.reducer,
        navScroll: navScrollSlice.reducer,
    },
});
