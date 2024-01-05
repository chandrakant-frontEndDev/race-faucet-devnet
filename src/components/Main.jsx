import React, { useState, useEffect } from 'react'
import MainHero from './MainHero'
import Faq from './Faq'
import Footer from './common/Footer'
import SocialButton from './utils/SocialButton'
import Cookies from 'js-cookie'
import { Spinner } from 'react-bootstrap'
import GithubLogin from './utils/GithubLogin'

function Main() {
    const [isLogin, setIsLogin] = useState(false)
    const [IsLoading, setIsLoading] = useState(false)
    const user = Cookies.get('uid')
    useEffect(() => {
        if (user) setIsLogin(true)
        else setIsLogin(false)
    }, [user])

    const SignOut = () => {
        Cookies.remove('uid')
        setIsLogin(false)
    }
    // ============================

    return (
        <>
            <div className='main_bg_img'>
                {isLogin ?
                    <div className='d-flex justify-content-end p-2'>
                        <figure className='github_btn_wrap'>
                            <button type='button' className='btn'>Welcome {user && JSON.parse(user).email ? JSON.parse(user).email : JSON.parse(user).userName}</button>
                        </figure>
                        <figure className='github_btn_wrap mx-2'>
                            <button type='button' className='btn' onClick={SignOut}>Sign Out</button>
                        </figure>
                    </div>
                    :
                    <div className='d-flex justify-content-end'>
                        {
                            IsLoading ?
                                <figure className='github_btn_wrap mx-2 p-2'>
                                    <button type='button' className='btn'>Loading...</button>
                                </figure>
                                :
                                <>
                                    <SocialButton
                                        setIsLoading={setIsLoading}
                                        loginType="gmail"
                                        liftState={setIsLogin}
                                        scope="https://www.googleapis.com/auth/userinfo.email"
                                        client_id={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                                        client_secret={process.env.REACT_APP_GOOGLE_CLIENT_SECRET}
                                    >
                                        <figure className='github_btn_wrap'>
                                            <button type='button' className='btn'>Sign In with Google</button>
                                        </figure>
                                    </SocialButton>
                                    <GithubLogin/>
                                </>
                        }
                    </div>
                }
                <MainHero />
                <Faq />
            </div>
            <Footer />
        </>
    )
}

export default Main