import { ITheComment } from "src/interfaces";

export const checkDeleteComment = (comment: ITheComment) => {
    if (comment.delete) {
        return false;
    } else if (comment.deleted) {
        return false;
    } else if (comment.dead) {
        return false;
    } else {
        return true;
    }
};
