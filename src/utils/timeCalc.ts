export const timeCalc = (timeNews: number) => {
    const currentDate: number = Number(new Date());
    const seconds: number = Math.floor((currentDate - timeNews * 1000) / 1000);

    const minute: number = 60;
    const hour: number = 3600;
    const day: number = 86400;
    const month: number = 2592000;
    const year: number = 31536000;

    if (seconds > 0 && seconds < minute) {
        return `${seconds} seconds ago`;
    } else if (seconds < hour) {
        return `${Math.floor(seconds / minute)} minutes ago`;
    } else if (seconds < day) {
        return `${Math.floor(seconds / hour)} hours ago`;
    } else if (seconds < month) {
        return `${Math.floor(seconds / day)} days ago`;
    } else if (seconds < year) {
        return `${Math.floor(seconds / month)} months ago`;
    } else if (seconds > year) {
        return `${Math.floor(seconds / year)} years ago`;
    }
};
