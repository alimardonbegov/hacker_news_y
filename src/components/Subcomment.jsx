import React from "react";
import Comment from "./Comment";

function Subcomment({ kid }) {
    return (
        kid && (
            <div className="subcomment">
                <Comment key={kid} comment={kid} />
            </div>
        )
    );
}

export default Subcomment;
