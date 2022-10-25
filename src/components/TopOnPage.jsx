import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getComments, getNewsList } from "../service/hackerNewsAPI";
import {
    clearComments,
    finishLoadingComments,
    hideNews,
    showNews,
    startLoadingComments,
} from "../redux/newsIDsSlice";
import { secondsUpdateInterval } from "../constants/constants";

function TopOnPage({ text }) {
    const navigate = useNavigate();
    const params = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        const interval = setInterval(() => dispatch(getNewsList()), 1000 * secondsUpdateInterval);
        return () => clearInterval(interval);
    }, []);

    function handleClickUpdate() {
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

    function handleClickBack() {
        dispatch(clearComments());
        navigate("/");
    }

    return (
        <div className="top-on-page">
            <button
                className={params.id ? "top-on-page__back" : "top-on-page__name"}
                onClick={handleClickBack}
            >
                {text}
            </button>
            <button className="top-on-page__update-button" onClick={handleClickUpdate}>
                Refresh
            </button>
        </div>
    );
}

export default TopOnPage;
