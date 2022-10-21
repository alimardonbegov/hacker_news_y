export const countReplies = (kids) => {
    if (kids === undefined) {
        return;
    }
    if (kids.length <= 1) {
        return `${kids.length} reply`;
    } else {
        return `${kids.length} replies`;
    }
};
