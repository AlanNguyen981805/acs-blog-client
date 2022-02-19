import { ErrorMessage, Field, Formik } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from "yup"
import { createCategoryStart } from '../../redux/category/actions';
import { ICategory } from '../../utils/TypeScript';

const CreateCategory = () => {
    const dispatch = useDispatch()
    const initialValue = {
        name: ''
    }

    const handleSubmit = (values: ICategory) => {
        dispatch(createCategoryStart(values))
    }

    return (
        <div>
            <Formik 
                initialValues={initialValue}
                onSubmit={handleSubmit}
                validationSchema={Yup.object().shape({
                    name: Yup.string().required("Vui lòng nhập loại tin").required()
                })}
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
                    return (
                    <form onSubmit={handleSubmit}>
                        <span>Tên loại tin</span>
                            <Field name="name" />
                            <ErrorMessage
                                name="name" 
                                component="span" 
                                className="error-notify"    
                            />

                        <button type="submit">Thêm loại tin</button>
                    </form>
                    )
                }}
            </Formik>
        </div>
    );
};

export default CreateCategory;