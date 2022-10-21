import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const mainURL = "https://hacker-news.firebaseio.com/v0/";
const listOfNewsIdURL = mainURL + "newstories.json"; // Up to 500 top and new stories are at /v0/topstories (also contains jobs) and /v0/newstories. Best stories are at /v0/beststories.
const oneNewsURL = mainURL + "item/";

//! getting news
export const getNewsIds = createAsyncThunk("news/getNewsIDs", async () => {
    try {
        const response = await axios.get(listOfNewsIdURL);
        return response.data;
    } catch (e) {
        console.log(e.message);
        return;
    }
});

export const getTheNews = async (id) => {
    try {
        const response = await axios.get(oneNewsURL + id + ".json");
        return response.data;
    } catch (e) {
        console.log(e.message);
        return;
    }
};

//! open one news and show comment
// export const getComment = async (id) => {
//     try {
//         const response = await axios.get(oneNewsURL + id + ".json");
//         return response.data;
//     } catch (e) {
//         console.log(e.message);
//         return;
//     }
// };
