import React, { useState, useEffect } from 'react'
import MainHero from './MainHero'
import Faq from './Faq'
import Footer from './common/Footer'
import SocialButton from './utils/SocialButton'
import Cookies from 'js-cookie'

function Main() {
    const [isLogin, setIsLogin] = useState(false)
    // const onLogout = useCallback(() => {}, []);
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
                    <button>Welcome</button>
                    :
                    <SocialButton>
                        <button>Sign In with Github</button>
                    </SocialButton>
                }
                {/* <button onClick={onLogout}>logout</button> */}
                <MainHero />
                <Faq />
            </div>
            <Footer />
        </>
    )
}

export default Main