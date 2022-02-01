import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
        "content-type": "application/json",
        "Accept": "application/json",
        "Content": "application/json"
    },
    paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
    // handle token here
    return config;
});

axiosClient.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response;
        }
        return response;
    },
    (error) => {
        throw error;
    }
);

export default axiosClient;
