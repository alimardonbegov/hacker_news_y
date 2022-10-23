import React from "react";
import News from "../components/News";
import TopOnPage from "../components/TopOnPage";

function MainPage() {
    return (
        <div className="container">
            <TopOnPage text="Hacker News" />
            <News />
        </div>
    );
}

export default MainPage;
