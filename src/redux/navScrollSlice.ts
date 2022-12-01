import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    prevScrollPosition: 0,
    visible: true,
};
// abegov

export const navScrollSlice = createSlice({
    name: "navScroll",
    initialState,
    reducers: {
        updatePrevScrollPosition: (state, action) => {
            state.prevScrollPosition = action.payload;
        },
        hideNav: (state) => {
            state.visible = false;
        },
        showNav: (state) => {
            state.visible = true;
        },
    },
});

export const { updatePrevScrollPosition, hideNav, showNav } = navScrollSlice.actions;
