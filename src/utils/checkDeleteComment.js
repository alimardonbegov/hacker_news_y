export const checkDeleteComment = (comment) => {
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
