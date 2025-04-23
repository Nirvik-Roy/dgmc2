import React from 'react'
import './Home.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img from '../assets/nathan-dumlao-Xavq7lKj5j8-unsplash.jpg'
import img2 from '../assets/photo-1542810634-71277d95dcbb.avif'
import img3 from '../assets/photo-1567001766755-3a3775614445.avif'
const Banner = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
    fade:true,
    autoplay:true,
    autoplaySpeed:2000
  };
  return (
    <>
   <Slider {...settings}>
   {[img,img2,img3].map((e,i)=>{
    return(
      <>
      <div className='banner_wrapper'>
        <img className='banner_img' src={e}/>
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
   })}
   
   </Slider>


   
    </>
  )
}

export default Banner
