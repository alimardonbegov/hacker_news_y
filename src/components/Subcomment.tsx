import React from "react";
import { ITheComment } from "src/interfaces";
import Comment from "./Comment";

interface ISubComment {
    comment: ITheComment;
}

const Subcomment: React.FC<ISubComment> = ({ comment }) => {
    return (
        comment && (
            <div className="subcomment">
                <Comment comment={comment} />
            </div>
        )
    );
};

export default Subcomment;
