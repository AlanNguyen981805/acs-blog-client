import createAxios from "./axiosInstance"

export const LoginUser = async (payload: any) => {
    const res = await createAxios.post(`api/login`, payload)
    return res
}

export const CreateBlog = async (payload: any) => {
    const res = await createAxios.post(`api/blog`, payload)
    return res;
}

export const CreateCategory = async (payload: any) => {
    const res = await createAxios.post(`api/category`, payload)
    return res
}

export const GetAllCategories = async (payload: any) => {
    const res = await createAxios.get(`/api/categories`)
    return res
}

export const GetHomeBlogs = async (payload: any) => {
    const res = await createAxios.get(`/api/blogs`)
    return res
}

export const getDetailBlog = async (idBlog: string) => {
    const res = await createAxios.get(`/api/blog/${idBlog}`)
    return res
}