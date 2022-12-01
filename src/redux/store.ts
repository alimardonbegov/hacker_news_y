import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { newsIDsSlice } from "./newsIDsSlice";
import { navScrollSlice } from "./navScrollSlice";

export const store = configureStore({
    reducer: {
        news: newsIDsSlice.reducer,
        navScroll: navScrollSlice.reducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
