import createAxios from "./axiosInstance"

export const LoginUser = async (payload: any) => {
    const res = await createAxios.post(`api/login`, payload)
    return res
}