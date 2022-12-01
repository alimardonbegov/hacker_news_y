export const getDomain = (url: any) => {
    // any , bcs .replace .join doesn't work on string
    url = url.replace(/(https?:\/\/)?(www.)?/i, "");
    url = url.split(".");
    url = url.slice(url.length - 2).join(".");

    if (url.indexOf("/") !== -1) {
        return url.split("/")[0];
    }
    return url;
};
