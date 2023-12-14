import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/css/main.scss"
// import MainHero from './components/MainHero';
import Footer from './components/common/Footer';
// import Faq from './components/Faq';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import SignIn from './components/SignIn';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path='/sign-in' element={<SignIn/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
