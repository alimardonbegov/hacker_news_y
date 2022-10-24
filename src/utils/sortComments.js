export const sortComments = (comments) => {
    const copyComments = [...comments];
    return copyComments.sort(({ time: a }, { time: b }) => (a > b ? 1 : a < b ? -1 : 0));
};
