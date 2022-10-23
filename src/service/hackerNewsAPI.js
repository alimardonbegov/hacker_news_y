import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { newsCount } from "../constants/constants";

const mainURL = "https://hacker-news.firebaseio.com/v0/";
const listOfNewsIdURL = mainURL + "newstories.json"; // Up to 500 top and new stories are at /v0/topstories (also contains jobs) and /v0/newstories. Best stories are at /v0/beststories.
const oneNewsURL = mainURL + "item/";

export const getNewsIds = createAsyncThunk("news/getNewsIDs", async () => {
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
