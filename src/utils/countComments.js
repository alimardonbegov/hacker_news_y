export const countComments = (kids) => {
    if (kids === undefined) {
        return "0 comments";
    }
    if (kids.length <= 1) {
        return `${kids.length} comment`;
    } else {
        return `${kids.length} comments`;
    }
};
