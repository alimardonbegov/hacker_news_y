import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showNews } from "../redux/newsIDsSlice";
import { AppDispatch, RootState } from "src/redux/store";
import { newsCount } from "../constants/constants";
import { getNewsList } from "../service/hackerNewsAPI";
import SkeletonCard from "./SkeletonCard";
import Card from "./Card";
import { checkReadNews } from "../utils/checkReadNews";
import { ITheNews } from "src/interfaces";

function News() {
    const dispatch = useDispatch<AppDispatch>();
    const isShowNews = useSelector((state: RootState) => state.news.isShowNews);
    const newsList = useSelector((state: RootState) => state.news.newsList);
    const readNews = useSelector((state: RootState) => state.news.readNews);
    const [skeletons, setSkeletons] = useState<number[]>([]);

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
                : newsList.map((el: ITheNews, index: number) => {
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
