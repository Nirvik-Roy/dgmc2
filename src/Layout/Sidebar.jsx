import React from 'react'
import logo from '../assets/939610874_dream.png'
const Sidebar = ({nav,setnav}) => {
  return (
    <>
      <div className={nav ? 'nav_responsive_wrapper_active' :'nav_responsive_wrapper'}>
            <i onClick={(()=>{setnav(!nav)})} class="fa-solid fa-xmark" ></i>
            <div className='nav_logo_wrapper8568'>
             <img src={logo}/>
          
            </div>
            <div style={{
              display:'flex',
              
             
              flexDirection:'column',
              rowGap:'22px',
             
            }}>
            <div className='d-flex justify-content-start align-items-center' style={{
              color:'white',
              columnGap:'10px'
            }}>
            <i class="fa-solid fa-house" style={{
            fontSize:'20px'
           }}></i>
            <h1>Home</h1>
            </div>

            <div className='d-flex justify-content-start align-items-center' style={{
              color:'white',
              columnGap:'10px'
            }}>
           <i class="fa-regular fa-address-card" style={{
            fontSize:'20px'
           }}></i>
           <h1>About Us</h1>
            </div>
           

            <div className='d-flex justify-content-start align-items-center' style={{
              color:'white',
              columnGap:'10px'
            }}>
            <i class="fa-solid fa-bars-progress" style={{
            fontSize:'20px'
           }}></i>
               <h1>Our Projects</h1>
            </div>
         
            <div className='d-flex justify-content-start align-items-center' style={{
              color:'white',
              columnGap:'10px'
            }}>
            <i class="fa-solid fa-images" style={{
            fontSize:'20px'
           }}></i>
               <h1>Gallery</h1>
            </div>
           
            <div className='d-flex justify-content-start align-items-center' style={{
              color:'white',
              columnGap:'10px'
            }}>
           <i class="fa-solid fa-handshake-angle" style={{
            fontSize:'20px'
           }}></i>
               <h1>Join As Volunteer</h1>
            </div>

            <div className='d-flex justify-content-start align-items-center' style={{
              color:'white',
              columnGap:'10px'
            }}>
         <i class="fa-solid fa-address-book" style={{
            fontSize:'20px'
           }}></i>
               <h1>Contact Us</h1>
            </div>
         
          
                <button className='nav_button_div'>LOGIN</button>
                <button className='nav_button_div'>GIFT CART</button>
            </div>
               
            </div>
    </>
  )
}

export default Sidebar
