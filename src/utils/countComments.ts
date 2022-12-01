import { ITheComment } from "src/interfaces";

export const countComments = (kids: ITheComment[]) => {
    if (kids === undefined) {
        return "0 comments";
    }
    if (kids.length <= 1) {
        return `${kids.length} comment`;
    } else {
        return `${kids.length} comments`;
    }
};
