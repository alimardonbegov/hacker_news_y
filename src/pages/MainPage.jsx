import React from "react";
import News from "../components/News";
import Navbar from "../components/Navbar";

function MainPage() {
    return (
        <div className="container">
            <Navbar text="Hacker News" />
            <News />
        </div>
    );
}

export default MainPage;
