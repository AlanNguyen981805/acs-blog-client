import axios, { Axios, AxiosInstance, AxiosRequestConfig } from "axios"
import jwtDecode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { authSuccess } from "../redux/auth/action";
import { IAuth } from "../redux/auth/type";
import { IDecoded, RootStore } from "./TypeScript";


const refreshTokenAPI = async () => {
    try {
        const res = await axios.get("/api/refresh_token", {
            withCredentials: true
        })
        localStorage.setItem("user", JSON.stringify(res.data))
        return res.data
    } catch (error) {
        console.log(error)
    }
}

const newInstance: AxiosInstance = axios.create();

    newInstance.interceptors.request.use(
        async(config: AxiosRequestConfig) => {
            let date = new Date()
            let user: any = localStorage.getItem("user")
            let parseUser = JSON.parse(user)
            if(parseUser) {
                const decoded: IDecoded = jwtDecode(parseUser.access_token)
                if(decoded.exp < date.getTime() / 1000) {
                    const data: IAuth = await refreshTokenAPI()
                    console.log(data.access_token)
                    // if(config.headers) {
                        config.headers.Authorization = `${data.access_token}`
                    // }
                }
            }
                return config;
            // }
        }, (err: any) => {
            return Promise.reject(err)
        }
    )

//     return  newInstance
// }

export default newInstance