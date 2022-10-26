import React from "react";
import cl from "./SkeletonTheNews.module.scss";

function SkeletonTheNews() {
    return (
        <>
            <div className={cl.skeleton}>
                <div className={cl.skeleton__header}> </div>
                <div className={cl.skeleton__detail}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className={cl.skeletoncomblock}>
                <div className={cl.skeletoncomblock__header}> </div>
                <div className={cl.skeletoncomblock__comment}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={cl.skeletoncomblock__text}></div>
            </div>
        </>
    );
}

export default SkeletonTheNews;
