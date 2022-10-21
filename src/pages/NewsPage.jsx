import React from "react";
// import Card from "../components/Card";
import TopOnPage from "../components/TopOnPage";
import { useParams } from "react-router-dom";
import BlockWithComments from "../components/BlockWithComments";

function NewsPage() {
    const params = useParams();

    return (
        <div className="container">
            <TopOnPage />
            <BlockWithComments id={params.id} />
        </div>
    );
}

export default NewsPage;
