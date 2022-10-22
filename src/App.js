import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "../src/router/router";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map((r) => (
                    <Route
                        key={r.element}
                        path={r.path}
                        element={r.element}
                        exact={r.exact}
                    ></Route>
                ))}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
