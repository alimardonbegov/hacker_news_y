import React from "react";
import { useNavigate } from "react-router-dom";

function Button({ text }) {
    const navigate = useNavigate();
    return (
        <button onClick={() => navigate("/")} className="top-on-page__name">
            {text}
        </button>
    );
}

export default Button;
