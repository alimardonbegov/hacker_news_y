import React, { useEffect, useState } from "react";
import { getTheNews } from "../service/hackerNewsAPI";
import Comment from "./Comment";

function Subcomment({ kids }) {
    const [subcomments, setSubcomments] = useState([]);

    useEffect(() => {
        setSubcomments([]);
        kids &&
            kids.map((el) =>
                getTheNews(el).then((data) => {
                    data && setSubcomments((prevValue) => [...prevValue, data]);
                })
            );
    }, []);

    return (
        subcomments &&
        subcomments.map((el, index) => {
            return (
                <div style={{ marginLeft: "50px" }}>
                    <Comment key={index} comment={el} />
                </div>
            );
        })
    );
}

export default Subcomment;
