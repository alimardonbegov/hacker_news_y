import { ITheNews } from "src/interfaces";

export const checkReadNews = (read: number[], el: ITheNews) =>
    el && el.hasOwnProperty("id") && el.id && read.indexOf(el.id) >= 0 ? true : false;
