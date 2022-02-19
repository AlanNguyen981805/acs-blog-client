
import * as Yup from "yup"
import { FILE_SIZE, SUPPORTED_FORMATS } from "../../utils/constand";

export const ValidationCreateBlog = {
    title: Yup.string().required("Tiêu đề là bắt buộc"),
    description: Yup.string().required("Mô tả là bắt buộc"),
    category: Yup.string().required("Bạn chưa chọn loại tin"),
    thumbnail: Yup
    .mixed()
    .test(
        "fileFormat",
        "Định dạng không hỗ trợ",
        (file) => {
            if (file) {
                return file && SUPPORTED_FORMATS.includes(file.type)
            }
        }
    )
    .test(
        "fileSize",
        "File không được quá 2mb",
        (file) => {
            if (file) {
                return file && file.size <= FILE_SIZE
            }
        }
    )
    
    
}