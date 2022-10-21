export const sortComments = (comments) => {
    return comments.sort(({ time: a }, { time: b }) => (a > b ? 1 : a < b ? -1 : 0));
};
