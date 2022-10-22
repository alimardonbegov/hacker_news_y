import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getTheNews } from "../service/hackerNewsAPI";
import { checkDeleteComment } from "../utils/checkDeleteComment";
import { checkDublicateComments } from "../utils/checkDublicateComments";
import { sortComments } from "../utils/sortComments";
import Comment from "./Comment";
import Loader from "./loader/Loader";
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
        <Loader />
    ) : (
        <div>
            <ThenewsDetail theNews={theNews} realComments={comments} />
            <div className="comments">
                {comments.length > 0 ? (
                    sortComments(comments).map((el, index) => <Comment key={index} comment={el} />)
                ) : (
                    <h3>There is no comments yet</h3>
                )}

                <h2 className="comments__block-name">Comments</h2>
            </div>
        </div>
    );
}

export default BlockWithComments;
