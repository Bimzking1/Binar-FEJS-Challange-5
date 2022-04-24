import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import MainContent from './MainContent'

const Layout = (props) => {
  return (
    <>
      <Navbar/>
      <MainContent>
          {props.children}
      </MainContent>
      <Footer/>
    </>
  )
}

export default Layout