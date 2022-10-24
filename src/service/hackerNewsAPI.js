import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { newsCount } from "../constants/constants";
import { checkDeleteComment } from "../utils/checkDeleteComment";

const mainURL = "https://hacker-news.firebaseio.com/v0/";
const listOfNewsIdURL = mainURL + "newstories.json";
const oneNewsURL = mainURL + "item/";

export const getNewsList = createAsyncThunk("news/getNewsList", async () => {
    try {
        const response = await axios.get(listOfNewsIdURL);
        const requests = response.data.slice(0, newsCount).map(async (el) => {
            const url = oneNewsURL + el + ".json";
            return await axios.get(url).then((res) => {
                return res.data;
            });
        });
        return Promise.all(requests);
    } catch (e) {
        console.log(e.message);
        return;
    }
});

export const getComments = createAsyncThunk("news/getComments", async (id) => {
    try {
        const response = await axios.get(oneNewsURL + id + ".json");
        if (!response.data.kids) {
            return;
        } else {
            const requests = response.data.kids.map(async (el) => {
                const url = oneNewsURL + el + ".json";
                return await axios.get(url).then((res) => {
                    return checkDeleteComment(res.data) && res.data;
                });
            });
            return Promise.all(requests);
        }
    } catch (e) {
        console.log(e.message);
        return;
    }
});

// made by Alimardon
export const getTheNews = async (id) => {
    try {
        const response = await axios.get(oneNewsURL + id + ".json");
        return response.data;
    } catch (e) {
        console.log(e.message);
        return;
    }
};
