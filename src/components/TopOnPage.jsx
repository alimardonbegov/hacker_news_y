import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { secondsUpdateInterval } from "../constants/constants";
import { getNewsIds } from "../service/hackerNewsAPI";
import Button from "./button/Button";

function TopOnPage({ text }) {
    const dispatch = useDispatch();
    
    setInterval(() => dispatch(getNewsIds()), 1000 * secondsUpdateInterval);

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
