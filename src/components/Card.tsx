import React from "react";
import { useNavigate } from "react-router-dom";
import { timeCalc } from "../utils/timeCalc";
import { useDispatch } from "react-redux";
import { openReadNews } from "../redux/newsIDsSlice";
import { ITheNews } from "src/interfaces";

interface ICard {
    theNews: ITheNews;
    opacity: string;
}

const Card: React.FC<ICard> = ({ theNews, opacity }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = (id: number) => {
        navigate(`/${id}`);
        dispatch(openReadNews(id));
    };

    if (theNews !== null && theNews.title) {
        return (
            <div
                style={{ opacity: opacity }}
                className="card"
                onClick={() => handleClick(theNews.id)}
            >
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
                        <span className="card__option-text"> Score: </span>
                        <span className="card__rating">{theNews.score}</span>
                    </div>
                </div>
            </div>
        );
    } else return null;
};

export default Card;
