import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getNewsIds } from "../service/hackerNewsAPI";

function TopOnPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const timeUpdate = useSelector((state) => state.newsIds.secondsUpdateInterval);
    const [update, setUpdate] = useState(true);

    function renderPage() {
        dispatch(getNewsIds());
        setUpdate(!update);
        console.log(timeUpdate);
        console.log("rendered");
    }

    setTimeout(() => renderPage(), 1000 * timeUpdate);

    return (
        <div className="top-on-page">
            <header className="top-on-page__name" onClick={() => navigate("/")}>
                Hacker News
            </header>
            <button className="top-on-page__update-button" onClick={() => renderPage()}>
                Update
            </button>
        </div>
    );
}

export default TopOnPage;
