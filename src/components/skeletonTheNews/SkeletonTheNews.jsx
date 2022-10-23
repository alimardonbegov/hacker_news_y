import React from "react";
import cl from "./SkeletonTheNews.module.scss";

function SkeletonTheNews() {
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

export default SkeletonTheNews;
