export const checkDublicateComments = (comments, data) => {
    if (comments.length == 0) {
        return true;
    } else {
        comments.forEach((el) => {
            if (el !== data) {
                return true;
            } else {
                return false;
            }
        });
    }
};
