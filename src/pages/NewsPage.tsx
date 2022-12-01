import React from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import BlockWithComments from "../components/BlockWithComments";
import { MdOutlineArrowBack } from "react-icons/md";

function NewsPage() {
    const params = useParams();

    return (
        <div className="container">
            <Navbar text={<MdOutlineArrowBack className="top-on-page__icon" />} />
            <BlockWithComments id={Number(params.id)} />
        </div>
    );
}

export default NewsPage;
