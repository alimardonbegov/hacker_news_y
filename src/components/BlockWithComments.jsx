import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getComments, getTheNews } from "../service/hackerNewsAPI";
import { checkDeleteComment } from "../utils/checkDeleteComment";
import { checkDublicateComments } from "../utils/checkDublicateComments";
import { sortComments } from "../utils/sortComments";
import Comment from "./Comment";
import SkeletonTheNews from "./skeletonTheNews/SkeletonTheNews";
import ThenewsDetail from "./ThenewsDetail";

import { useDispatch } from "react-redux";

function BlockWithComments(props) {
    const dispatch = useDispatch();
    const newsList = useSelector((state) => state.news.newsList);
    const comments = useSelector((state) => state.news.comments);

    const [theNews, setTheNews] = useState({});

    //get the news information
    useEffect(() => {
        getTheNews(props.id).then((data) => {
            data && data.title && setTheNews(data);
        });
    }, [newsList]);

    //get comments information

    useEffect(() => {
        dispatch(getComments(props.id));
    }, [newsList]);

    return theNews.title == undefined ? (
        <SkeletonTheNews />
    ) : (
        <>
            <ThenewsDetail theNews={theNews} realComments={comments} />
            {comments && comments.length > 0 ? (
                <div className="comments">
                    <h2 className="comments__block-name">Comments</h2>
                    {sortComments(comments).map((el, index) => (
                        <Comment key={index} comment={el} />
                    ))}
                </div>
            ) : (
                <></>
            )}
        </>
    );
}

export default BlockWithComments;
