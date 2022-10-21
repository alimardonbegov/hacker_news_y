import MainPage from "../pages/MainPage";
import NewsPage from "../pages/NewsPage";

export const publicRouters = [
    { path: "*", element: <MainPage />, exact: true },
    { path: "/:id", element: <NewsPage />, exact: true },
];
