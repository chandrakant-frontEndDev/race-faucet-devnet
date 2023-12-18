import React from 'react'
import { LoginSocialGoogle } from 'reactjs-social-login';
import Cookies from 'js-cookie';
import axios from 'axios';
export default function SocialButton({ children, liftState }) {
    const REDIRECT_URL = window.location.href
    const handleResolve = async (data) => {
        try {
            const bodyData = {
                email: data.data.email,
                accessToken: data.data.access_token
            }
            await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/signInWithGmail`, bodyData)
            Cookies.set("uid", JSON.stringify(bodyData))
            liftState(true)
        } catch (error) {
            console.log("error", error)
        }
    }
    return (
        <>
            <LoginSocialGoogle
                className='text-end p-2'
                client_id={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                client_secret={process.env.REACT_APP_GOOGLE_CLIENT_SECRET}
                redirect_uri={REDIRECT_URL}
                scope="https://www.googleapis.com/auth/userinfo.email"
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
