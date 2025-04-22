import React from 'react'
import img from '../assets/photo-1488521787991-ed7bbaae773c.avif'
import img1 from '../assets/nathan-dumlao-Xavq7lKj5j8-unsplash.jpg'
import img2 from '../assets/photo-1542810634-71277d95dcbb.avif'
import img3 from '../assets/photo-1567001766755-3a3775614445.avif'
const HomeAbout = () => {
  return (
    <>
      <div className='universal_container'>
                <div className='homeabout_wrapper'>
                    <div className='home_about_left' >
                    
                        <h1 className='about_head'>About <span> Us</span> </h1>
                        <h5>Dream Golden Memories is a non-profit organization dedicated to uplifting communities, empowering individuals, and creating lasting positive change. Founded on the principles of compassion, inclusivity, and service, we aim to bring hope and opportunities to those who need them most.</h5>
                        <div className='quote_wrapper'>
                            <h2>Our mission is to transform lives by addressing critical issues such as education, healthcare, poverty alleviation, and community development. We believe in the power of collective action and work tirelessly to bridge the gap between resources and those in need.</h2>
                        </div>

                        <div className='list_wrapper'>
                            <div className='list_1'>
                            <i class="fa-regular fa-circle-check"></i>
                                <h5>Providing scholarships, learning materials, and access to quality education for underprivileged children.</h5>
                            </div>

                            <div className='list_1'>
                            <i class="fa-regular fa-circle-check"></i>
                                <h5>Organizing medical camps, offering free health checkups, and raising awareness about preventive care.</h5>
                            </div>

                            <div className='list_1'>
                            <i class="fa-regular fa-circle-check"></i>
                                <h5>Delivering relief during emergencies, supporting sustainable livelihoods, and fostering self-reliance in marginalized communities.</h5>
                            </div>
                        </div>

                        
                    </div>
                    <div className='home_about_right'  style={{
                        position:'relative'
                    }}>
                  <div className='img_1'>
                  <img style={{
                    width:'100%',
                    height:'100%',
                  objectFit:'cover',
                  borderRadius:'15px'
                  }} src={img2}/>
                  
                  </div>
                 <div className='img_2'>
                 <img style={{
                    width:'100%',
                    height:'100%',
                  objectFit:'cover',
                  borderRadius:'15px'
                  }}   src={img}/>
                 </div>
               <div className='img_3'>
               <img style={{
                    width:'100%',
                    height:'100%',
                  objectFit:'cover',
                  borderRadius:'15px'
                  }}   src={img3}/>
               </div>
              <div className='img_4'>
              <img  style={{
                    width:'100%',
                    height:'100%',
                  objectFit:'cover',
                  borderRadius:'15px'
                  }} src={img1}/>
              </div>
                  
                    </div>
                </div>
            </div> 
    </>
  )
}

export default HomeAbout
