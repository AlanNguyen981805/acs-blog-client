import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from "yup"
import axiosClient from '../../utils/axiosClient';
import { IUserRegister } from '../../utils/TypeScript';

const Register = () => {
    const handleSubmit = (values: IUserRegister, {setErrors}: any) => {
        axiosClient.post('/api/register', values).then(res => {
            console.log(res)
        }).catch(err => {
            setErrors(err.response.data.msg)
        })
    }   

    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    account: '',
                    password: '',
                    cf_password: ''
                }}
                onSubmit={handleSubmit}
                validationSchema={Yup.object().shape({
                    name: Yup.string().required('Vui lòng nhập tên').min(2, 'Tên quá ngắn'),
                    account: Yup.string().email('Email không hợp lệ').required('Bạn chưa nhập Email'),
                    password: Yup.string().required('Vui lòng nhập mật khẩu').min(6, 'Mật khẩu phải lớn hơn 6 ký tự'),
                    cf_password: Yup.string().oneOf([Yup.ref('password'), null], "Mật khẩu không khớp")
                })}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                   
                        <Form onSubmit={handleSubmit} className="form-auth">
                            <h1>Tạo tài khoản</h1>
                            <div className="social-container">
                                <a href="" className="social">
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="0.49em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 486.037 1000"><path d="M124.074 1000V530.771H0V361.826h124.074V217.525C124.074 104.132 197.365 0 366.243 0C434.619 0 485.18 6.555 485.18 6.555l-3.984 157.766s-51.564-.502-107.833-.502c-60.9 0-70.657 28.065-70.657 74.646v123.361h183.331l-7.977 168.945H302.706V1000H124.074" fill="currentColor" /></svg>
                                </a>
                                <a href="" className="social">
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path d="M881 442.4H519.7v148.5h206.4c-8.9 48-35.9 88.6-76.6 115.8c-34.4 23-78.3 36.6-129.9 36.6c-99.9 0-184.4-67.5-214.6-158.2c-7.6-23-12-47.6-12-72.9s4.4-49.9 12-72.9c30.3-90.6 114.8-158.1 214.7-158.1c56.3 0 106.8 19.4 146.6 57.4l110-110.1c-66.5-62-153.2-100-256.6-100c-149.9 0-279.6 86-342.7 211.4c-26 51.8-40.8 110.4-40.8 172.4S151 632.8 177 684.6C240.1 810 369.8 896 519.7 896c103.6 0 190.4-34.4 253.8-93c72.5-66.8 114.4-165.2 114.4-282.1c0-27.2-2.4-53.3-6.9-78.5z" fill="currentColor" /></svg>
                                </a>
                                <a href="" className="social">
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 0 0 2.048-2.578a9.3 9.3 0 0 1-2.958 1.13a4.66 4.66 0 0 0-7.938 4.25a13.229 13.229 0 0 1-9.602-4.868c-.4.69-.63 1.49-.63 2.342A4.66 4.66 0 0 0 3.96 9.824a4.647 4.647 0 0 1-2.11-.583v.06a4.66 4.66 0 0 0 3.737 4.568a4.692 4.692 0 0 1-2.104.08a4.661 4.661 0 0 0 4.352 3.234a9.348 9.348 0 0 1-5.786 1.995a9.5 9.5 0 0 1-1.112-.065a13.175 13.175 0 0 0 7.14 2.093c8.57 0 13.255-7.098 13.255-13.254c0-.2-.005-.402-.014-.602a9.47 9.47 0 0 0 2.323-2.41l.002-.003z" fill="currentColor" /></g></svg>
                                </a>
                            </div>
                            <span>hoặc sử dụng email để đăng nhập</span>
                            {/* <input type="text" placeholder="Name" /> */}
                            <Field 
                                name="name" 
                                type="text" 
                                placeholder="Nhập tên"
                                className="input-login"
                            />
                             <ErrorMessage name="name" component="span" className="invalid-feedback" />
                            <Field 
                                name="account" 
                                type="text" 
                                placeholder="email" 
                                className="input-login"
                            />
                             <ErrorMessage name="account" component="span" className="invalid-feedback" />
                            <Field 
                                name="password"
                                placeholder="Mật khẩu" 
                                className="input-login"
                            />
                             <ErrorMessage name="password" component="span" className="invalid-feedback" />
                            <Field 
                                name="cf_password"
                                placeholder="Nhập lại mật khẩu" 
                                className="input-login"
                            />
                             <ErrorMessage name="cf_password" component="span" className="invalid-feedback" />
                            <button type="submit">Đăng ký</button>
                        </Form>
                )}
            </Formik>

        </>
    );
};

export default Register;