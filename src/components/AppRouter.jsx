import React from "react";
import { Route, Routes } from "react-router-dom";
import { publicRouters } from "../router/router";

function AppRouter() {
    return (
        <Routes>
            {publicRouters.map((r) => (
                <Route key={r.element} path={r.path} element={r.element} exact={r.exact}></Route>
            ))}
        </Routes>
    );
}

export default AppRouter;
