import React from "react";
import News from "../components/News";
import TopOnPage from "../components/TopOnPage";

function MainPage() {
    return (
        <div className="container">
            <TopOnPage />
            <News />
        </div>
    );
}

export default MainPage;
