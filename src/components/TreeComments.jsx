import React from "react";
import Comment from "./Comment";

function TreeComments({ comment }) {
    let subcomment = comment.kids;

    return (
        <div>
            <Comment comment={comment} />
            {subcomment &&
                subcomment.map((el, index) => {
                    <Comment key={index} comment={el} />;
                    {
                        subcomment.lenght > 0 && <Comment key={index} comment={el} />;
                    }
                })}
        </div>
    );
}

export default TreeComments;
