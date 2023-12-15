import React, { useState, useEffect } from 'react'
import MainHero from './MainHero'
import Faq from './Faq'
import Footer from './common/Footer'
import SocialButton from './utils/SocialButton'
import Cookies from 'js-cookie'

function Main() {
    const [isLogin, setIsLogin] = useState(false)
    const user = Cookies.get('uid')
    useEffect(() => {
        if (user) {
            setIsLogin(true)
        } else {
            setIsLogin(false)
        }
    }, [user])

    return (
        <>
            <div className='main_bg_img'>
                {isLogin ?
                    <figure className='github_btn_wrap'>
                        <button type='button' className='btn'>Welcome</button>
                    </figure>
                    :
                    <SocialButton>
                        <figure className='github_btn_wrap'>
                            <button type='button' className='btn'>Sign In with Github</button>
                        </figure>
                    </SocialButton>
                }
                <MainHero />
                <Faq />
            </div>
            <Footer />
        </>
    )
}

export default Main