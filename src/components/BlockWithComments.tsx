import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ITheNews } from "src/interfaces";
import { AppDispatch, RootState } from "src/redux/store";
import { secondsUpdateInterval } from "../constants/constants";
import { finishLoadingComments, startLoadingComments } from "../redux/newsIDsSlice";
import { getComments, getTheNews } from "../service/hackerNewsAPI";
import { sortComments } from "../utils/sortComments";
import Comment from "./Comment";
import SkeletonTheNews from "./SkeletonTheNews";
import ThenewsDetail from "./ThenewsDetail";

interface IBlockWithComments {
    id: number;
}

const BlockWithComments: React.FC<IBlockWithComments> = ({ id }) => {
    const dispatch = useDispatch<AppDispatch>();
    const comments = useSelector((state: RootState) => state.news.comments);
    const isLoadingComments = useSelector((state: RootState) => state.news.isLoadingComments);
    const [theNews, setTheNews] = useState<ITheNews>();
    const sortedComments = sortComments(comments);
    const loadTheNews = () =>
        getTheNews(id).then((data) => {
            data && data.title && setTheNews(data);
        });

    //get the news information
    useEffect(() => {
        loadTheNews();
        dispatch(startLoadingComments());
        const interval = setInterval(() => loadTheNews(), 1000 * secondsUpdateInterval);
        return () => clearInterval(interval);
    }, []);

    //get comments information
    useEffect(() => {
        const fetctData = async () => {
            await dispatch(getComments(id));
            await dispatch(finishLoadingComments());
        };
        fetctData().catch(console.error);
    }, [theNews]);

    return (
        <div className="comments-container">
            {theNews?.title == undefined || isLoadingComments ? (
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
            )}
        </div>
    );
};

export default BlockWithComments;
