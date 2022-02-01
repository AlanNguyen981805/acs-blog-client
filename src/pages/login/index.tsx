import React, { useEffect } from 'react'
import { getProviders, getSession, signIn, signOut, useSession } from 'next-auth/react'
import RegisterComponent from '../../components/register';
import LoginComponent from '../../components/login';
import Layout from '../../components/layout';
import { useSelector } from 'react-redux';
import { RootStore } from '../../utils/TypeScript';
import { useRouter } from 'next/router';

const Login: React.FC = () => {
    const { data: session } = useSession();
    const { auth } = useSelector((state: RootStore) => state)
    const router = useRouter()

    useEffect(() => {
        const signUpButton: any = document.getElementById('signUp');
        const signInButton: any = document.getElementById('signIn');
        const container: any = document.getElementById('container');

        signUpButton.addEventListener('click', () => {
            container.classList.add("right-panel-active");
        });
        signInButton.addEventListener('click', () => {
            container.classList.remove("right-panel-active");
        });
    }, [])

    useEffect(() => {
        if(auth.access_token) {
            router.push('/')
        }
    }, [auth.access_token])

    return (
        <>
        <div className="wrapLogin">
            <div className="container" id="container">
                <div className="form-container sing-up-container">
                    <RegisterComponent />
                </div>

                <div className="form-container sing-in-container">
                    <LoginComponent />
                </div>

                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connectied with up please login with your personal info</p>
                            <button className="devingine" id="signIn">Đăng nhập</button>
                        </div>

                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your parsonal details and start journey with us.</p>
                            <button className="devingine" id="signUp">Đăng ký</button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
        </>
    );
}

export default Login