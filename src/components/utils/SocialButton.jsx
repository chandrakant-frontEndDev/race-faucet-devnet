import React from 'react'
import { LoginSocialGoogle } from 'reactjs-social-login';
import Cookies from 'js-cookie';
import axios from 'axios';
export default function SocialButton({ children }) {
    const REDIRECT_URL = window.location.href
    const handleResolve = async (data) => {
        try {
            const bodyData = {
                email: data.data.email,
                accessToken: data.data.access_token
            }
            const apiData = await axios.post("http://192.168.0.99:5000/auth/signInWithGmail", bodyData)
            console.log("data", apiData)
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
            // allow_signup={false}
            >
                {children}
            </LoginSocialGoogle>
        </>
    )
}
