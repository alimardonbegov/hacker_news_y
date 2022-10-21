import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getTheNews } from "../service/hackerNewsAPI";
import { getComments } from "../utils/getComments";
import Comment from "./Comment";
import Loader from "./loader/Loader";
import ThenewsDetail from "./ThenewsDetail";
import TreeComments from "./TreeComments";

function BlockWithComments(props) {
    const newsIds = useSelector((state) => state.newsIds.newsIds);
    const [theNews, setTheNews] = useState({});
    const [comments, setComments] = useState([]);

    //  let comments = [];

    //get the news information
    useEffect(() => {
        getTheNews(props.id).then((data) => data && data.url && setTheNews(data));
    }, [newsIds]);

    //get comments information
    useEffect(() => {
        setComments([]);
        theNews.kids &&
            theNews.kids.map((el) =>
                getTheNews(el).then((data) => {
                    data && setComments((prevValue) => [...prevValue, data]);
                })
            );
    }, [theNews]);

    return theNews.title == undefined ? (
        <Loader />
    ) : (
        <div>
            <ThenewsDetail theNews={theNews} />
            <div className="comments">
                <h2 className="comments__block-name">Comments</h2>

                {comments.length > 0 ? (
                    comments.map((el, index) => <TreeComments key={index} comment={el} />)
                ) : (
                    <h3>There is no comments yet</h3>
                )}
            </div>
        </div>
    );
}

export default BlockWithComments;
