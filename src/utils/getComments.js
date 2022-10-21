import { getTheNews } from "../service/hackerNewsAPI";

export const getComments = (ids) => {
    let comments = [];

    ids &&
        ids.map((el) =>
            getTheNews(el).then((data) => {
                data && comments.push(data);
            })
        );

    return comments;
};
