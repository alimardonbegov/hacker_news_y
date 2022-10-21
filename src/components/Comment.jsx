import React, { useState } from "react";
import { countReplies } from "../utils/countReplies";
import { handleText } from "../utils/handleText";
import { timeCalc } from "../utils/timeCalc";
import Subcomment from "./Subcomment";

function Comment({ comment }) {
    const [show, setShow] = useState(false);

    return (
        <div>
            <div className="comment" onClick={() => setShow(!show)}>
                <div className="comment__comment-detail">
                    <span className="comment__author">{comment.by}</span>
                    <span className="comment__date">{timeCalc(comment.time)}</span>
                    <span className="comment__replies">{countReplies(comment.kids)}</span>
                </div>
                {comment.text && (
                    <div
                        className="comment__text"
                        dangerouslySetInnerHTML={{ __html: handleText(comment.text) }}
                    ></div>
                )}
            </div>
            {comment.kids && show && <Subcomment kids={comment.kids} key={comment.kids} />}
        </div>
    );
}

export default Comment;
