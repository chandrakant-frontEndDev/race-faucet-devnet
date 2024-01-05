import React from 'react'
import { LoginSocialGoogle, LoginSocialGithub } from 'reactjs-social-login';
import Cookies from 'js-cookie';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function SocialButton({ children, liftState, client_id, client_secret, scope, loginType, setIsLoading }) {
    const REDIRECT_URL = window.location.href
    const handleResolve = async (data) => {
        setIsLoading(true)
        switch (loginType) {
            case 'github':
                const GithubBodyData = {
                    userName: data.data.login,
                    accessToken: data.data.access_token
                }
                SocialAPI('/auth/signInWithGithub', GithubBodyData)
                break;
            case 'gmail':
                const GoogleBodyData = {
                    email: data.data.email,
                    accessToken: data.data.access_token
                }
                SocialAPI('/auth/signInWithGmail', GoogleBodyData)
                break;
        }
        async function SocialAPI(endpoint, body) {
            try {
                await axios.post(`${process.env.REACT_APP_BASE_URL}${endpoint}`, body)
                Cookies.set("uid", JSON.stringify({ ...body, type: loginType }))
                liftState(true)
                setIsLoading(false)
            } catch (error) {
                setIsLoading(false)
                console.log("error", error)
                toast.error(`Something went wrong!`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                    theme: 'colored'
                });
            }
        }
    }
    return (
        <>
            <ToastContainer />
            <LoginSocialGoogle
                className='text-end p-2'
                client_id={client_id}
                client_secret={client_secret}
                redirect_uri={REDIRECT_URL}
                scope={scope}
                onResolve={handleResolve}
                onReject={(err) => {
                    console.log(err);
                }}
                onLogoutSuccess={(logout) => {
                    console.log({ logout });
                }}
            >
                {children}
            </LoginSocialGoogle>
        </>
    )
}
