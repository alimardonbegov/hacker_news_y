import { ITheComment } from "src/interfaces";

export const checkDublicateComments = (comments: ITheComment[], data: ITheComment) => {
    if (comments.length == 0) {
        return true;
    } else {
        comments.forEach((el: ITheComment) => {
            if (el !== data) {
                return true;
            } else {
                return false;
            }
        });
    }
};
