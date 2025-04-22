import React from 'react'
import Banner from './Banner'
import './Home.css'
import Donar from './Donar'
import HomeCampaings from './HomeCampaings'
import HomeAbout from './HomeAbout'
import SocialRecognition from './SocialRecognition'
import HomeContact from './HomeContact'
const Home = () => {
  return (
    <div style={{
        overflow:'hidden'
    }}>
      <Banner/>
      <Donar/>
      <HomeAbout/>
      <HomeCampaings/>
      <SocialRecognition/>
      <HomeContact/>
    </div>
  )
}

export default Home
