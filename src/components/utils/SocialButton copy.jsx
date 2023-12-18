import React from 'react'
import { LoginSocialGithub } from 'reactjs-social-login';
import Cookies from 'js-cookie';
export default function SocialButton({ children }) {
    const REDIRECT_URL = window.location.href
    return (
        <>
            <LoginSocialGithub
                className='text-end p-2'
                client_id={process.env.REACT_APP_GITHUB_CLIENT_ID}
                client_secret={process.env.REACT_APP_GITHUB_CLIENT_SECRET}
                redirect_uri={REDIRECT_URL}
                scope='read:org'
                onResolve={(user) => {
                    Cookies.set('uid', user.data.access_token)
                }}
                onReject={(err) => {
                    console.log(err);
                }}
                onLogoutSuccess={(logout) => {
                    console.log({ logout });
                }}
                allow_signup={false}
            >
                {children}
            </LoginSocialGithub>
        </>
    )
}
