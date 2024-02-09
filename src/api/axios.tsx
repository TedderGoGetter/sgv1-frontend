import axios from "axios";
const BASE_URL = 'http://localhost:3333/'

export default axios.create({
    baseURL: BASE_URL,
    headers: {'Access-Control-Allow-Origin': 'localhost:3333'},
})

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: 
        {
            'Access-Control-Allow-Origin': 'localhost:3333',
            'Content-Type': 'application/json',
        },
    withCredentials: true

})