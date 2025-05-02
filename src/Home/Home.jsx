import React from 'react'
import Banner from './Banner'
import './Home.css'
import Donar from './Donar'
import HomeCampaings from './HomeCampaings'
import HomeAbout from './HomeAbout'
import SocialRecognition from './SocialRecognition'
import HomeContact from './HomeContact'
import Happiness from './Happiness'
const Home = () => {
  return (
    <div style={{
        overflow:'hidden'
    }}>
      <Banner/>
      <Donar/>
      <HomeAbout/>
      <HomeCampaings/>
      <Happiness/>
      <SocialRecognition/>
      <HomeContact/>
    </div>
  )
}

export default Home
