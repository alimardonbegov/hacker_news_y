import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNewsIds } from "../service/hackerNewsAPI";
import Button from "./button/Button";

function TopOnPage({ text }) {
    const dispatch = useDispatch();
    const timeUpdate = useSelector((state) => state.news.secondsUpdateInterval);
    setInterval(() => dispatch(getNewsIds()), 1000 * timeUpdate);

    return (
        <div className="top-on-page">
            <Button text={text} />
            <button className="top-on-page__update-button" onClick={() => dispatch(getNewsIds())}>
                Update
            </button>
        </div>
    );
}

export default TopOnPage;
