import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getComments, getNewsList } from "../service/hackerNewsAPI";
import {
    finishLoadingComments,
    hideNews,
    showNews,
    startLoadingComments,
} from "../redux/newsIDsSlice";
import MyButton from "./MyButton/MyButton";
import { secondsUpdateInterval } from "../constants/constants";

function TopOnPage({ text }) {
    const params = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        const interval = setInterval(() => dispatch(getNewsList()), 1000 * secondsUpdateInterval);
        return () => clearInterval(interval);
    }, []);

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
            <MyButton text={text} />
            <button className="top-on-page__update-button" onClick={handleClick}>
                Refresh
            </button>
        </div>
    );
}

export default TopOnPage;
