import Cookies from 'js-cookie'
import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
export default function GithubLogin() {
    async function getCode() {
        window.location.assign('https://github.com/login/oauth/authorize?client_id=' + process.env.REACT_APP_GITHUB_CLIENT_ID)
    }
    // ================================
    const accessToken = Cookies.get('uid')
    useEffect(() => {
        const paramString = window.location.search
        const urlParam = new URLSearchParams(paramString)
        const code = urlParam.get('code')
        if (code !== null && accessToken === undefined) {
            async function getAccessToken() { 
                await fetch(`${process.env.REACT_APP_BASE_URL}/auth/signInWithGithub?clientId=${process.env.REACT_APP_GITHUB_CLIENT_ID}&clientSecret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}&code=${code}`, {
                    method: "POST"
                }).then((res) => {
                    return res.json()
                }).then((data) => {
                    if (data) {
                        Cookies.set("uid", JSON.stringify({...data, type: "github"}))
                        window.location.href = "/"
                    }
                }).catch((e) => {
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
                })
            }
            getAccessToken()
        }
    }, [])

    return (
        <>
            <ToastContainer />
            <div className='text-end p-2'>
                <div className='github_btn_wrap'>
                    <button type='button' className='btn' onClick={getCode}>Sign In with Github</button>
                </div>
            </div>
        </>
    )
}
