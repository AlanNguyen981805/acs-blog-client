import { ErrorMessage, Field, Formik } from 'formik';
import React, { useEffect, useReducer, useRef, useState } from 'react';
import CardVertical from '../../components/cards/CardVertical';
import ReactQill from '../../components/editors/react-quill';
import * as Yup from "yup"
import { ValidationCreateBlog } from './validation';
import { IBlog, ICategory, RootStore } from '../../utils/TypeScript';
import { useDispatch, useSelector } from 'react-redux';
import { createBlogAction } from '../../redux/blog/action';
import { getCategoriesStart } from '../../redux/category/actions';

const CreateBlog = () => {
    const refImg: any = useRef(null)
    const refFormik: any = useRef(null)
    const dispatch = useDispatch()
    const initialValue: IBlog = { 
        title: '', 
        description: '', 
        category: "", 
        content: "", 
        thumbnail: "" 
    }
    const [blog, setBlog] = useState(initialValue)
    const [content, setContent] = useState('')

    const { category, auth, alert } = useSelector((state: RootStore) => state)


    const handleSubmit = (values: IBlog) => {
        dispatch(createBlogAction({...values, thumbnail: 'https://cafebiz.cafebizcdn.vn/thumb_w/600/162123310254002176/2022/2/7/photo1644222660491-16442226608232106459073.jpg'}))
    }

    useEffect(() => {
        dispatch(getCategoriesStart())       
    }, [])

    useEffect(() => {
    }, [category]) 

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
                                                    // value="thumbnail"
                                                    onChange={(event: any) => {
                                                        setFieldValue("thumbnail", event.currentTarget.files[0]);
                                                        setFieldTouched('thumbnail');
                                                    }}
                                                    // onBlur={handleBlur}
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
                                                    {
                                                        category.loading ? <h1>Loading</h1> : 
                                                        category.categories?.map((item: ICategory, index) => {
                                                            return (
                                                                <option value={item._id}>{item.name}</option>
                                                            )
                                                        })
                                                    }
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