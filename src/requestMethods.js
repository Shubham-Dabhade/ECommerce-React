import axios from "axios";


const BASE_URL = "https://ecommerce-api-5ei6.onrender.com";
// const TOKEN = (JSON.parse(localStorage.getItem("user")).accessToken) || null;


export const publicRequest = axios.create({
    baseURL:BASE_URL,
});

// export const userRequest = axios.create({
//     baseURL:BASE_URL,
//     headers:{token:`Bearer ${TOKEN}`}
// });