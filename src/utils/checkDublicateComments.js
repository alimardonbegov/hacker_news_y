export const checkDublicateComments = (comments, data) => {
    if (comments.length == 0) {
        return true;
    } else {
        comments.forEach((el) => {
            console.log(el);
            return el !== data;
        });
    }
};
