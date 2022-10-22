import React, { useEffect, useState } from "react";
import { getTheNews } from "../service/hackerNewsAPI";
import { checkDeleteComment } from "../utils/checkDeleteComment";
import { checkDublicateComments } from "../utils/checkDublicateComments";
import { sortComments } from "../utils/sortComments";
import Comment from "./Comment";

function Subcomment({ kids }) {
    const [subcomments, setSubcomments] = useState([]);

    useEffect(() => {
        kids &&
            kids.map((el) =>
                getTheNews(el).then((data) => {
                    data &&
                        checkDeleteComment(data) &&
                        checkDublicateComments(subcomments, data) &&
                        setSubcomments((prevValue) => [...prevValue, data]);
                })
            );
    }, []);

    return (
        subcomments &&
        sortComments(subcomments).map((el, index) => {
            return (
                <div style={{ marginLeft: "50px" }}>
                    <Comment key={index} comment={el} />
                </div>
            );
        })
    );
}

export default Subcomment;
