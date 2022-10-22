import Error from "../pages/Error";
import MainPage from "../pages/MainPage";
import NewsPage from "../pages/NewsPage";

export const routes = [
    { path: "*", element: <MainPage />, exact: true },
    { path: "/:id", element: <NewsPage />, exact: true },
    { path: "/error", element: <Error />, exact: true },
];
