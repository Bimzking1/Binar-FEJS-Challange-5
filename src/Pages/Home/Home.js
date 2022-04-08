import React from 'react'
import Panel from '../../Components/Panel/Panel'
import './home.css'

const Home = () => {
  return (
    <div className='home-container'>
      <div className='home'>
        <Panel show="true" cari="false"></Panel>
      </div>
    </div>
  )
}

export default Home