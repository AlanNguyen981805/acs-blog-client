import axios from "axios"

export const getApi = async (url: string, token?: any) => {
    const res = await axios.get(`http://localhost:5000/api/${url}`, {
        headers: { Authorization: token, withCredentials: true }
    })
    return res
}

export const getToken = (token: string) => {
    if (token) {
      return token;
    }
    let accessToken = localStorage.getItem("user")
    if(!accessToken) return ""
    return JSON.parse(accessToken)
  };