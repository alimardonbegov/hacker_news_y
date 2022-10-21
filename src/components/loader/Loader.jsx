import React from "react";
import cl from "./Loader.module.scss";

export default function Loader() {
    return (
        <div className={cl.loaderPosition}>
            <div className={cl.ldsroller}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}
