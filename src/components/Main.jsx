import React from 'react'
import MainHero from './MainHero'
import Faq from './Faq'
import Footer from './common/Footer'

function Main() {
    return (
        <>
            <div className='main_bg_img'>
                <MainHero />
                <Faq />
             </div>
            <Footer/>
        </>
    )
}

export default Main