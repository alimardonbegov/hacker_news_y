import React, { useState, useEffect } from "react";
import { ITheComment } from "src/interfaces";
import { getTheNews } from "../service/hackerNewsAPI";
import { checkDeleteComment } from "../utils/checkDeleteComment";
import { checkDublicateComments } from "../utils/checkDublicateComments";
import { countReplies } from "../utils/countReplies";
import { handleText } from "../utils/handleText";
import { sortComments } from "../utils/sortComments";
import { timeCalc } from "../utils/timeCalc";
import Subcomment from "./Subcomment";

interface IComment {
    comment: ITheComment;
}

const Comment: React.FC<IComment> = ({ comment }) => {
    const [show, setShow] = useState<Boolean>(false);
    const [subcomments, setSubcomments] = useState<ITheComment[]>([]);

    useEffect(() => {
        comment.kids &&
            comment.kids.map((el: number) =>
                getTheNews(el).then((data) => {
                    data &&
                        checkDeleteComment(data) &&
                        checkDublicateComments(subcomments, data) &&
                        setSubcomments((prevValue) => [...prevValue, data]);
                })
            );
    }, []);

    return (
        <>
            <div className="comment" onClick={() => setShow(!show)}>
                <div className="comment__comment-detail">
                    <span className="comment__author">{comment.by}</span>
                    <span className="comment__date">{timeCalc(comment.time)}</span>
                    <span className="comment__replies">{countReplies(subcomments)}</span>
                </div>
                {comment.text && (
                    <div
                        className="comment__text"
                        dangerouslySetInnerHTML={{ __html: handleText(comment.text) }}
                    ></div>
                )}
            </div>

            {show &&
                sortComments(subcomments).map((el, index) => (
                    <Subcomment key={index} comment={el} />
                ))}
        </>
    );
};

export default Comment;
