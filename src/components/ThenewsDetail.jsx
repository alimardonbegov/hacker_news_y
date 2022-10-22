import React from "react";
import { countComments } from "../utils/countComments";
import { timeCalc } from "../utils/timeCalc";

function ThenewsDetail({ theNews, realComments }) {
    return (
        <div className="news-detail">
            <a className="news-detail__link" href={theNews.url} target="_blank" rel="noreferrer">
                Source
            </a>
            <h1 className="news-detail__title">{theNews.title}</h1>
            <div className="news-detail__bottom">
                <div className="news-detail__option">
                    <span className="news-detail__date">{timeCalc(theNews.time)}</span>
                </div>
                <div className="news-detail__option">
                    <span className="news-detail__author">{theNews.by}</span>
                </div>
                <div className="news-detail__option">
                    <span className="news-detail__count">{countComments(realComments)}</span>
                </div>
            </div>
        </div>
    );
}

export default ThenewsDetail;
