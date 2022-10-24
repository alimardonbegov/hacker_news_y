import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNewsList } from "../service/hackerNewsAPI";
import SkeletonCard from "../components/SkeletonCard/SkeletonCard";
import Card from "./Card";
import { newsCount } from "../constants/constants";

function News() {
    const dispatch = useDispatch();
    const isShowNews = useSelector((state) => state.news.isShowNews);
    const newsList = useSelector((state) => state.news.newsList);
    const [skeletons, setSkeletons] = useState([]);

    useEffect(() => {
        dispatch(getNewsList());
        for (let i = 0; i < newsCount; i++) {
            setSkeletons((prevValue) => [...prevValue, i]);
        }
    }, []);

    return (
        <>
            {newsList.length == 0 || !isShowNews
                ? skeletons.map((el, index) => <SkeletonCard key={index} />)
                : newsList.map((el) => <Card key={el.id} theNews={el} />)}
        </>
    );
}

export default News;
