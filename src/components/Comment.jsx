import React from "react";
import { handleText } from "../utils/handleText";
import { timeCalc } from "../utils/timeCalc";

function Comment({ comment }) {
    return (
        <div className="comment">
            <div className="comment__comment-detail">
                <span className="comment__author">{comment.by}</span>
                <span className="comment__date">{timeCalc(comment.time)}</span>
            </div>
            {comment.text && (
                <div
                    className="comment__text"
                    dangerouslySetInnerHTML={{ __html: handleText(comment.text) }}
                ></div>
            )}
        </div>
    );
}

// 33244834

export default Comment;
