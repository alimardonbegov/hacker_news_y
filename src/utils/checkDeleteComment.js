export const checkDeleteComment = (comment) => {
    if (comment.delete) {
        return false;
    } else if (comment.deleted) {
        console.log("DELETED");
        return false;
    } else if (comment.dead) {
        return false;
    } else {
        return true;
    }
};
