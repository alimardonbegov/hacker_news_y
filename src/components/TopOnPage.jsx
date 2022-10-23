import React from "react";
import { useDispatch } from "react-redux";
import { secondsUpdateInterval } from "../constants/constants";
import { hideNews, showNews } from "../redux/newsIDsSlice";
import { getNewsIds } from "../service/hackerNewsAPI";
import Button from "./button/Button";

function TopOnPage({ text }) {
    const dispatch = useDispatch();
    setInterval(() => dispatch(getNewsIds()), 1000 * secondsUpdateInterval);

    function handleClick() {
        dispatch(getNewsIds());
        dispatch(showNews());
        setTimeout(() => {
            dispatch(hideNews());
        }, 300);
    }

    return (
        <div className="top-on-page">
            <Button text={text} />
            <button className="top-on-page__update-button" onClick={handleClick}>
                Update
            </button>
        </div>
    );
}

export default TopOnPage;
