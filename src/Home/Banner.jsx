import React from 'react'
import './Home.css'
import img from '../assets/nathan-dumlao-Xavq7lKj5j8-unsplash.jpg'
const Banner = () => {
  return (
    <>
      <div className='banner_wrapper'>
        <img className='banner_img' src={img}/>
        <div className='banner_overlay'></div>
        <div className='universal_container '>
        <div className='banner_content'>
        <h1><span>Make your Birthdays more special With  </span> 
        Heartfelt Blessings  from the ELderly Parents </h1>
        <button>DONATE NOW</button>
        </div>
            
        </div>
      </div>
    </>
  )
}

export default Banner
