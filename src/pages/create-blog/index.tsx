import { ErrorMessage, Field, Formik } from 'formik';
import React, { useRef, useState } from 'react';
import CardVertical from '../../components/cards/CardVertical';
import ReactQill from '../../components/editors/react-quill';
import * as Yup from "yup"
import { ValidationCreateBlog } from './validation';
import { IBlog } from '../../utils/TypeScript';

const CreateBlog = () => {
    const refImg: any = useRef(null)
    const refFormik: any = useRef(null)
    const initialValue: IBlog = { 
        title: '', 
        description: '', 
        category: "", 
        content: "", 
        file: null 
    }
    const [blog, setBlog] = useState(initialValue)
    const [content, setContent] = useState('')

    const handleSubmit = (values: IBlog) => {
        console.log(values)
    }

    return (
        <>
            <Formik
                initialValues={initialValue}
                enableReinitialize={true}
                validationSchema={Yup.object().shape(ValidationCreateBlog)}
                onSubmit={handleSubmit}
                innerRef={refFormik}
            >
                {({
                    values,
                    errors,
                    setFieldValue,
                    handleSubmit,
                    handleChange,
                    touched,
                    handleBlur,
                    setFieldTouched
                }) => {
                    setBlog(values)
                    return (
                        <div className="container-blog">
                            <form onSubmit={handleSubmit}>
                                <div className="box-blog">
                                    <div className="box-blog-left">
                                        <h3>Tạo Bài viết của bạn</h3>

                                        <div className="wrap-input-create-blog">
                                            <Field
                                                name="title"
                                                className="input-login"
                                                placeholder="Tiêu đề của bạn"
                                            />
                                            <ErrorMessage 
                                                name="title" 
                                                component="span" 
                                                className="error-notify" 
                                            />
                                            <div className="box-upload"
                                                onClick={(e) => refImg && refImg.current.click()}
                                            >
                                                <input
                                                    type="file"
                                                    style={{ display: 'none' }}
                                                    name="file"
                                                    ref={refImg}
                                                    onChange={(event: any) => {
                                                        setFieldValue("file", event.currentTarget.files[0]);
                                                        setFieldTouched('file');
                                                    }}
                                                    onBlur={handleBlur}
                                                />
                                                Chọn ảnh tiêu đề
                                            </div>
                                            {
                                                errors && errors.file && touched.file
                                                    ? <span className="error-notify">{errors.file}</span>
                                                    : null
                                            }
                                            <Field
                                                as="textarea"
                                                name="description"
                                                className="input-login"
                                                placeholder="Mô tả ngắn"
                                                style={{ height: "100px" }}
                                            />
                                            <ErrorMessage 
                                                name="description" 
                                                component="span" 
                                                className="error-notify"    
                                            />

                                            <div className="select">
                                                <select name="category" id="category" onChange={handleChange}>
                                                    <option selected disabled>Chọn loại bài viết</option>
                                                    <option value="pdf">PDF</option>
                                                    <option value="txt">txt</option>
                                                    <option value="epub">ePub</option>
                                                    <option value="fb2">fb2</option>
                                                    <option value="mobi">mobi</option>
                                                </select>
                                            </div>
                                            <ErrorMessage 
                                                name="category" 
                                                component="span" 
                                                className="error-notify"
                                            />
                                        </div>
                                    </div>
                                    <div className="box-blog-right">
                                        <h3>Xem trước</h3>
                                        <CardVertical
                                            blog={blog}
                                            img={refFormik?.current?.values.file}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <ReactQill setFieldValue={setFieldValue} setContent={setContent} />
                                </div>
                                <div className="box-button-create-blog">
                                    <button type="submit">Tạo bài viết</button>
                                </div>
                            </form>
                        </div>
                    )
                }}
            </Formik>
        </>
    );
};


export default CreateBlog;