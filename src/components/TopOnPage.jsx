import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { secondsUpdateInterval } from "../constants/constants";
import {
    finishLoadingComments,
    hideNews,
    showNews,
    startLoadingComments,
} from "../redux/newsIDsSlice";
import { getComments, getNewsList } from "../service/hackerNewsAPI";
import Button from "./button/Button";

function TopOnPage({ text }) {
    const params = useParams();
    const dispatch = useDispatch();
    setInterval(() => dispatch(getNewsList()), 1000 * secondsUpdateInterval);

    function handleClick() {
        const fetctDataNewsList = async () => {
            await dispatch(hideNews());
            await dispatch(getNewsList());
            await dispatch(showNews());
        };

        const fetctDataComments = async (id) => {
            await dispatch(startLoadingComments());
            await dispatch(getComments(id));
            await dispatch(finishLoadingComments());
        };

        if (params.id) {
            fetctDataComments(params.id).catch(console.error);
        } else {
            fetctDataNewsList().catch(console.error);
        }
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
