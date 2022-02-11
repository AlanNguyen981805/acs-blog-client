import { ErrorMessage, Field, Formik } from 'formik';
import React, { useRef, useState } from 'react';
import CardVertical from '../../components/cards/CardVertical';
import ReactQill from '../../components/editors/react-quill';
import * as Yup from "yup"
import { ValidationCreateBlog } from './validation';
import { IBlog } from '../../utils/TypeScript';
import { useDispatch } from 'react-redux';
import { createBlogAction } from '../../redux/blog/action';

const CreateBlog = () => {
    const refImg: any = useRef(null)
    const refFormik: any = useRef(null)
    const dispatch = useDispatch()
    const initialValue: IBlog = { 
        title: '', 
        description: '', 
        category: "", 
        content: "", 
        thumbnail: null 
    }
    const [blog, setBlog] = useState(initialValue)
    const [content, setContent] = useState('')

    const handleSubmit = (values: IBlog) => {
        dispatch(createBlogAction({...values, thumbnail: 'https://cafebiz.cafebizcdn.vn/thumb_w/600/162123310254002176/2022/2/7/photo1644222660491-16442226608232106459073.jpg'}))
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
                                                    name="thumbnail"
                                                    ref={refImg}
                                                    onChange={(event: any) => {
                                                        setFieldValue("thumbnail", event.currentTarget.files[0]);
                                                        setFieldTouched('thumbnail');
                                                    }}
                                                    onBlur={handleBlur}
                                                />
                                                Chọn ảnh tiêu đề
                                            </div>
                                            {
                                                errors && errors.thumbnail && touched.thumbnail
                                                    ? <span className="error-notify">{errors.thumbnail}</span>
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
                                            img={refFormik?.current?.values.thumbnail}
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