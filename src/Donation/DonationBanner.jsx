import React from 'react'
import './Donation.css'
import img from '../assets/nathan-dumlao-Xavq7lKj5j8-unsplash.jpg'
import whatsapp from '../assets/whatsapp.png'
import facebook from '../assets/facebook (1).png'
import twitter from '../assets/twitter.png'
import linkedin from '../assets/linkedin (2).png'
const DonationBanner = () => {
  return (
    <>
      <div className='donation_banner_wrapper'>
        <img className='donation_banner_img' src={img}/>
      </div>
      <div className='donation_details_Wrapper universal_container'>
        <h1>
        Urgent: Help Shruthi Provide shelter for 350+ rescued animals</h1>
        <div className='donation_goal_wrapper' style={{
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center',
            flexWrap:'wrap',
            rowGap:'0px'
        }}>
        <h2>₹1,691,715</h2>
        <h5>raised out of <span style={{
            fontWeight:"600"
        }}>₹20000000</span> Goal</h5>
        </div>
   <div className='donation_outside_div'>
    <div className='donation_inside_div'></div>
   </div> 
   <div className='donars_number_div_wrapper56856'>
   <i class="fa-solid fa-users"></i>
   <p>2243 + Donors</p>
   </div>
   <div className='share_wrappper'>
   <div>
   <h4>Share this fundraiser</h4>
   <p>Every Social Media Share Brings Rs 5000</p>
   </div>
<div className='share_logos_div56875'>
    <img src={whatsapp}/>
    <img src={facebook}/>
    <img src={twitter}/>
    <img src={linkedin}/>
</div>
   </div>
      </div>
    </>
  )
}

export default DonationBanner
