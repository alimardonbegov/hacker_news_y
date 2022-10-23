import React from "react";
import cl from "./SkeletonCard.module.scss";

function SkeletonCard() {
    return (
        <div className={cl.skeleton}>
            <div className={cl.skeleton__header}> </div>
            <div className={cl.skeleton__detail}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
}

export default SkeletonCard;
