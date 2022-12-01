import React from "react";
import { ITheComment, ITheNews } from "src/interfaces";
import { countComments } from "../utils/countComments";
import { getDomain } from "../utils/getDomain";
import { timeCalc } from "../utils/timeCalc";

interface IThenewsDetail {
    theNews: ITheNews;
    realComments: Array<ITheComment>;
}

const ThenewsDetail: React.FC<IThenewsDetail> = ({ theNews, realComments }) => {
    return (
        <div className="news-detail">
            <h1 className="news-detail__title">
                {theNews.title}
                <span className="news-detail__link">
                    {theNews.url && (
                        <>
                            {" "}
                            (
                            <a href={theNews.url} target="_blank" rel="noreferrer">
                                {getDomain(theNews.url)}
                            </a>
                            )
                        </>
                    )}
                </span>
            </h1>
            <div className="news-detail__bottom">
                <div className="news-detail__option">
                    <span className="news-detail__author">{theNews.by}</span>
                </div>
                <div className="news-detail__option">
                    <span className="news-detail__date">{timeCalc(theNews.time)}</span>
                </div>

                <div className="news-detail__option">
                    <span className="news-detail__count">{countComments(realComments)}</span>
                </div>
            </div>
        </div>
    );
};

export default ThenewsDetail;
