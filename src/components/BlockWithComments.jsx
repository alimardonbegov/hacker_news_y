import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { secondsUpdateInterval } from "../constants/constants";
import { finishLoadingComments, startLoadingComments } from "../redux/newsIDsSlice";
import { getComments, getTheNews } from "../service/hackerNewsAPI";
import { sortComments } from "../utils/sortComments";
import Comment from "./Comment";
import SkeletonTheNews from "./skeletonTheNews/SkeletonTheNews";
import ThenewsDetail from "./ThenewsDetail";

function BlockWithComments(props) {
    const dispatch = useDispatch();
    const comments = useSelector((state) => state.news.comments);
    const isLoadingComments = useSelector((state) => state.news.isLoadingComments);
    const [theNews, setTheNews] = useState({});
    const sortedComments = sortComments(comments);

    //get the news information
    useEffect(() => {
        getTheNews(props.id).then((data) => {
            data && data.title && setTheNews(data);
        });
    }, []);

    setInterval(
        () =>
            dispatch(
                getTheNews(props.id).then((data) => {
                    data && data.title && setTheNews(data);
                })
            ),
        1000 * secondsUpdateInterval
    );

    //get comments information
    useEffect(() => {
        const fetctData = async () => {
            // await dispatch(startLoadingComments());
            await dispatch(getComments(props.id));
            await dispatch(finishLoadingComments());
        };
        fetctData().catch(console.error);
    }, [theNews]);

    return theNews.title == undefined || isLoadingComments ? (
        <SkeletonTheNews />
    ) : (
        <>
            <ThenewsDetail theNews={theNews} realComments={sortedComments} />
            <div className="comments">
                <h2 className="comments__block-name">Comments</h2>
                {sortedComments && sortedComments.length > 0 ? (
                    sortedComments.map((el, index) => <Comment key={index} comment={el} />)
                ) : (
                    <div className="comment">
                        <div className="comment__text"> There are no comments here yet</div>
                    </div>
                )}
            </div>
        </>
    );
}

export default BlockWithComments;
