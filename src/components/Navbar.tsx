import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { MdRefresh } from "react-icons/md";

import { getComments, getNewsList } from "../service/hackerNewsAPI";
import { secondsUpdateInterval } from "../constants/constants";
import { hideNav, showNav, updatePrevScrollPosition } from "../redux/navScrollSlice";
import {
    clearComments,
    finishLoadingComments,
    hideNews,
    showNews,
    startLoadingComments,
} from "../redux/newsIDsSlice";
import { AppDispatch, RootState } from "src/redux/store";

interface INavbar {
    text: any; // string or component
}

const Navbar: React.FC<INavbar> = ({ text }) => {
    const navigate = useNavigate();
    const params = useParams();
    const dispatch = useDispatch<AppDispatch>();
    const prevScrollPosition = useSelector(
        (state: RootState) => state.navScroll.prevScrollPosition
    );
    const visible = useSelector((state: RootState) => state.navScroll.visible);

    function handleScroll() {
        const currentScrollPosition = window.pageYOffset;
        (prevScrollPosition > currentScrollPosition &&
            prevScrollPosition - currentScrollPosition > 60) ||
        currentScrollPosition < prevScrollPosition
            ? dispatch(showNav())
            : dispatch(hideNav());
        dispatch(updatePrevScrollPosition(currentScrollPosition));
    }

    function handleClickUpdate() {
        const fetctDataNewsList = async () => {
            await dispatch(hideNews());
            await dispatch(getNewsList());
            await dispatch(showNews());
        };

        const fetctDataComments = async (id: number) => {
            await dispatch(startLoadingComments());
            await dispatch(getComments(id));
            await dispatch(finishLoadingComments());
        };

        if (params.id) {
            fetctDataComments(Number(params.id)).catch(console.error);
        } else {
            fetctDataNewsList().catch(console.error);
        }
    }

    function handleClickBack() {
        dispatch(clearComments());
        navigate("/");
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPosition, visible, handleScroll]);

    useEffect(() => {
        const interval = setInterval(() => dispatch(getNewsList()), 1000 * secondsUpdateInterval);
        return () => clearInterval(interval);
    }, []);

    return (
        <nav className="top-container" style={{ top: visible ? "0" : "-60px" }}>
            <div className="top-on-page">
                <button
                    className={params.id ? "top-on-page__back" : "top-on-page__name"}
                    onClick={handleClickBack}
                >
                    {text}
                </button>
                <button className="top-on-page__update-button" onClick={handleClickUpdate}>
                    <MdRefresh className="top-on-page__icon" />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
