export const timeCalc = (timeNews) => {
    const seconds = Math.floor((new Date() - timeNews * 1000) / 1000);

    const minute = 60;
    const hour = 3600;
    const day = 86400;
    const month = 2592000;
    const year = 31536000;

    if (seconds > 0 && seconds < minute) {
        return `${seconds} seconds`;
    } else if (seconds < hour) {
        return `${Math.floor(seconds / minute)} minutes`;
    } else if (seconds < day) {
        return `${Math.floor(seconds / hour)} hours`;
    } else if (seconds < month) {
        return `${Math.floor(seconds / day)} days`;
    } else if (seconds < year) {
        return `${Math.floor(seconds / month)} months`;
    }
};
