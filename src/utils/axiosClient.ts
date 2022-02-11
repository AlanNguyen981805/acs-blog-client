import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
        "content-type": "application/json",
        "Accept": "application/json",
        "Content": "application/json",
    },
    paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
    // handle token here
    const customConfig: any = config;
    // customConfig.headers.Authorization = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjU1ZWVmODkxMzk5YjI1ZWM5ZWQ1OCIsImlhdCI6MTY0NDI5MzQ4NiwiZXhwIjoxNjQ0MjkzNzg2fQ.AywnEBiCF5BmA7ANRtZ3b1CtaGA_jmjtEDG9SyMeO5Q`;
    return customConfig;
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
