import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Car from '../Components/Car/Car'
import MainContent from './MainContent'
import Panel from '../Components/Panel/Panel'

const Layout = (props) => {
  return (
    <>
      <Navbar/>
      <Car/>
      {/* <Panel show="true" cari="false"></Panel> */}
      <MainContent>
        {props.children}
      </MainContent>
      <Footer/>
    </>
  )
}

export default Layout