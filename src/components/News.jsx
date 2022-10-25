import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showNews } from "../redux/newsIDsSlice";
import { newsCount } from "../constants/constants";
import { getNewsList } from "../service/hackerNewsAPI";
import SkeletonCard from "../components/SkeletonCard/SkeletonCard";
import Card from "./Card";
import { checkReadNews } from "../utils/checkReadNews";

function News() {
    const dispatch = useDispatch();
    const isShowNews = useSelector((state) => state.news.isShowNews);
    const newsList = useSelector((state) => state.news.newsList);
    const readNews = useSelector((state) => state.news.readNews);
    const [skeletons, setSkeletons] = useState([]);

    useEffect(() => {
        for (let i = 0; i < newsCount; i++) {
            setSkeletons((prevValue) => [...prevValue, i]);
        }
        const fetctData = async () => {
            await dispatch(getNewsList());
            await dispatch(showNews());
        };
        fetctData().catch(console.error);
    }, []);

    return (
        <div className="newsList-container">
            {newsList == undefined ||
            newsList.length == 0 ||
            (isShowNews == false && skeletons.length > 0)
                ? skeletons.map((el, index) => <SkeletonCard key={index} />)
                : newsList.map((el, index) => {
                      return checkReadNews(readNews, el) ? (
                          <Card opacity="0.4" key={index} theNews={el} />
                      ) : (
                          <Card opacity="1" key={index} theNews={el} />
                      );
                  })}
        </div>
    );
}

export default News;
