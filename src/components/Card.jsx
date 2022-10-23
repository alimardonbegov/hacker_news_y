import React from "react";
import { useNavigate } from "react-router-dom";
import { timeCalc } from "../utils/timeCalc";

function Card({ theNews }) {
    const navigate = useNavigate();

    return (
        theNews.title && (
            <div className="card" onClick={() => navigate(`/${theNews.id}`)}>
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
