import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNewsIds } from "../service/hackerNewsAPI";
import Card from "./Card";

function News() {
    const dispatch = useDispatch();
    const newsIds = useSelector((state) => state.newsIds.newsIds);

    useEffect(() => {
        dispatch(getNewsIds());
    }, []);

    return (
        <div>
            {newsIds.length > 0 &&
                newsIds.slice(0, 99).map((el, index) => <Card key={index} id={el} />)}
        </div>
    );
}

export default News;
