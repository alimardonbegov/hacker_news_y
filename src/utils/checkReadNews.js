export const checkReadNews = (read, el) =>
    el && el.hasOwnProperty("id") && el.id && read.indexOf(el.id) > 0 ? true : false;
