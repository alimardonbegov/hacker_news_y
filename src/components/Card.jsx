import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getTheNews } from "../service/hackerNewsAPI";
import { timeCalc } from "../utils/timeCalc";

function Card(props) {
    const navigate = useNavigate();

    const newsIds = useSelector((state) => state.newsIds.newsIds);
    const [theNews, setTheNews] = useState({});

    useEffect(() => {
        getTheNews(props.id).then((data) => data && data.url && setTheNews(data));
    }, [newsIds]);

    return (
        theNews.title && (
            <div className="card" onClick={() => navigate(`/${props.id}`)}>
                <h1 className="card__title">{theNews.title}</h1>
                <div className="card__bottom">
                    <div className="card__option">
                        <span className="card__option-text"> Author: </span>
                        <span className="card__author">{theNews.by}</span>
                    </div>
                    <div className="card__option">
                        <span className="card__option-text"> Posted: </span>
                        <span className="card__date">{timeCalc(theNews.time)}</span>
                    </div>
                    <div className="card__option">
                        <span className="card__option-text"> Points: </span>
                        <span className="card__rating">{theNews.score}</span>
                    </div>
                </div>
            </div>
        )
    );
}

export default Card;
