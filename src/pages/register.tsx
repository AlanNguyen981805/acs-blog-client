import React, { useEffect } from 'react'
import { getProviders, getSession, signIn, signOut, useSession } from 'next-auth/react'
// import styles from "./../../styles/Login.module.css"
// import "./../../styles/Auth.scss"

const Login: React.FC = () => {
    const { data: session } = useSession();

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

    return (
        <>
            <div className="container" id="container">
                <div className="form-container sing-up-container">
                    <form action="">
                        <h1>Create Account</h1>
                        <div className="social-container">
                            <a href="" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>Or use your email for Registration</span>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button>Sing Up</button>
                    </form>
                </div>
                <div className="form-container sing-in-container">
                    <form action="">
                <h1>Sign In</h1>
                <div className="social-container">
                    <a href="" className="social"><i className="fab fa-facebook-f"></i></a>
                    <a href="" className="social"><i className="fab fa-google-plus-g"></i></a>
                    <a href="" className="social"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <span>or use your account</span>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Sing In</button>
            </form>
                </div>

                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connectied with up please login with your personal info</p>
                            <button className="devingine" id="signIn">Sign In</button>
                        </div>

                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your parsonal details and start journey with us.</p>
                            <button className="devingine" id="signUp">Sign Up</button>
                        </div>

                    </div>
                </div>

            </div>
        </>
    );
}

export default Login