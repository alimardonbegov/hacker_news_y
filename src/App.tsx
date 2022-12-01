import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import NewsPage from "./pages/NewsPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<MainPage />} />
                <Route path="/:id" element={<NewsPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
