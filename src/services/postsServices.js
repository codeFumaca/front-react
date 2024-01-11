import axios from "axios";

const baseURL = "http://localhost:3000";

export function getAllPosts() {
    const response = axios.get(`${baseURL}/news?offset=1`);
    return response;
}

export function getTopPost() {
    const response = axios.get(`${baseURL}/news/top`);
    return response;
}

export function getByTitlePost(params) {
    const response = axios.get(`${baseURL}/news/search?title=${params}`);
    return response;
}