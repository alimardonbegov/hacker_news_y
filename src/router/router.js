import SkeletonTheNews from "../components/skeletonTheNews/SkeletonTheNews";
import MainPage from "../pages/MainPage";
import NewsPage from "../pages/NewsPage";

export const routes = [
    { path: "*", element: <MainPage />, exact: true },
    { path: "/:id", element: <NewsPage />, exact: true },
    { path: "/skeleton", element: <SkeletonTheNews />, exact: true },
];
