import { Field, Formik } from 'formik';
import React, { useRef, useState } from 'react';
import CardVertical from '../../components/cards/CardVertical';
import ReactQill from '../../components/editors/react-quill';
import Input from '../../components/global/input';

const CreateBlog = () => {
    const refImg: any = useRef(null)
    const initialValue = { title: '', description: '' }
    const [blog, setBlog] = useState(initialValue)

    const handleSubmit = () => {
        console.log("submit")
    }

    return (
        <>
            <div className="container-blog">
                <div className="box-blog">
                    <div className="box-blog-left">
                        <h3>Tạo Bài viết của bạn</h3>
                        <Formik
                            initialValues={{
                                title: "",
                                description: "",
                                category: ""
                            }}
                            onSubmit={handleSubmit}
                        >
                            {({
                                values
                            }) => {
                                try {
                                    setBlog(values)
                                } catch (error) {
                                    
                                }
                                return (
                                    <form>
                                        <div className="wrap-input-create-blog">
                                            <Field
                                                name="title"
                                                className="input-login"
                                                placeholder="Tiêu đề của bạn"
                                            />
                                            <div className="box-upload"
                                                onClick={(e) => refImg && refImg.current.click()}
                                            >
                                                <input
                                                    type="file"
                                                    style={{ display: 'none' }}
                                                    ref={refImg}
                                                />
                                                Chọn ảnh cho tiêu đề
                                            </div>
                                            <Field
                                                as="textarea"
                                                name="description"
                                                className="input-login"
                                                placeholder="Mô tả ngắn"
                                                style={{ height: "100px" }}
                                            />

                                            <div className="select">
                                                <select name="format" id="format">
                                                    <option selected disabled>Chọn loại bài viết</option>
                                                    <option value="pdf">PDF</option>
                                                    <option value="txt">txt</option>
                                                    <option value="epub">ePub</option>
                                                    <option value="fb2">fb2</option>
                                                    <option value="mobi">mobi</option>
                                                </select>
                                            </div>

                                        </div>
                                    </form>
                                )
                            }}
                        </Formik>
                    </div>
                    <div className="box-blog-right">
                        <h3>Xem trước</h3>
                        <CardVertical blog={blog} />
                    </div>
                </div>
                <div style={{ padding: '0 50px' }}>
                    <ReactQill />
                </div>
            </div>
        </>
    );
};


export default CreateBlog;