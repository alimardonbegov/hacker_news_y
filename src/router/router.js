import MainPage from "../pages/MainPage";
import NewsPage from "../pages/NewsPage";

export const publicRouters = [
    { path: "*", element: <MainPage />, exact: true },
    { path: "/test", element: <NewsPage />, exact: true }, // delete later
    { path: "/:id", element: <NewsPage />, exact: true },
];
