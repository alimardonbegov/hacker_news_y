import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearComments } from "../../redux/newsIDsSlice";

function MyButton({ text }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleClick() {
        dispatch(clearComments());
        navigate("/");
    }

    return (
        <button onClick={handleClick} className="top-on-page__name">
            {text}
        </button>
    );
}

export default MyButton;
