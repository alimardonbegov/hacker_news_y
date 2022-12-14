import { ITheComment } from "src/interfaces";

export const countReplies = (kids: ITheComment[]) => {
    if (kids === undefined || kids.length === 0) {
        return;
    }
    if (kids.length == 1) {
        return `${kids.length} reply`;
    } else {
        return `${kids.length} replies`;
    }
};
