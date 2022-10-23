import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getTheNews } from "../service/hackerNewsAPI";
import { checkDeleteComment } from "../utils/checkDeleteComment";
import { checkDublicateComments } from "../utils/checkDublicateComments";
import { sortComments } from "../utils/sortComments";
import Comment from "./Comment";
import Loader from "./loader/Loader";
import SkeletonTheNews from "./skeletonTheNews/SkeletonTheNews";
import ThenewsDetail from "./ThenewsDetail";

function BlockWithComments(props) {
    const newsIds = useSelector((state) => state.newsIds.newsIds);
    const [theNews, setTheNews] = useState({});
    const [comments, setComments] = useState([]);

    //get the news information
    useEffect(() => {
        getTheNews(props.id).then((data) => data && data.url && setTheNews(data));
    }, [newsIds]);

    //get comments information
    useEffect(() => {
        theNews.kids &&
            theNews.kids.map((el) =>
                getTheNews(el).then((data) => {
                    data &&
                        checkDeleteComment(data) &&
                        checkDublicateComments(comments, data) &&
                        setComments((prevValue) => [...prevValue, data]);
                })
            );
    }, [theNews]);

    return theNews.title == undefined ? (
        //   <Loader />
        <SkeletonTheNews />
    ) : (
        <>
            <ThenewsDetail theNews={theNews} realComments={comments} />
            {comments.length > 0 ? (
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
