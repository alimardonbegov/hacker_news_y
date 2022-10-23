import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNewsIds } from "../service/hackerNewsAPI";
import SkeletonCard from "../components/SkeletonCard/SkeletonCard";
import Card from "./Card";

function News() {
    const dispatch = useDispatch();
    const newsCount = useSelector((state) => state.news.newsCount);
    const newsList = useSelector((state) => state.news.newsList);
    const [skeletons, setSkeletons] = useState([]);

    useEffect(() => {
        dispatch(getNewsIds());
        for (let i = 0; i < newsCount; i++) {
            setSkeletons((prevValue) => [...prevValue, i]);
        }
    }, []);

    console.log(newsList);

    return (
        <>
            {newsList.length == 0
                ? skeletons.map((el, index) => <SkeletonCard key={el} />)
                : newsList.length > 0 &&
                  newsList
                      .slice(0, newsCount)
                      .map((el, index) => <Card key={index} theNews={el} />)}
        </>
    );
}

export default News;
