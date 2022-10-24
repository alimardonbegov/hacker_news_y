export const sortComments = (comments) => {
    if (comments !== undefined) {
        const copyComments = [...comments];
        return copyComments
            .filter(Boolean)
            .sort(({ time: a }, { time: b }) => (a > b ? 1 : a < b ? -1 : 0));
    } else {
        return comments;
    }
};
