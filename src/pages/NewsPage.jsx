import React from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import BlockWithComments from "../components/BlockWithComments";

function NewsPage() {
    const params = useParams();

    return (
        <div className="container">
            <Navbar text="Go back" />
            <BlockWithComments id={params.id} />
        </div>
    );
}

export default NewsPage;
