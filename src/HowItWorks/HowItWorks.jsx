import React from 'react'
import img from '../assets/b65004c4-4643-4c3b-b77a-ce135ae21705.jpeg'
import img1 from '../assets/6f6eb630-728d-4cf0-a96f-a8204d9757c1.jpeg'
const HowItWorks = () => {
  return (
    <>
      <div className='how_works_wrapper'>
        <div className='how_works_banner'>
          <h1>How It Works</h1>
          <h6>Charitism is one of its kind platform in India which is
            transforming the way people give to charities with help of e-commerce</h6>
        </div>
        <div className='mission_wrapper universal_container'>
          <div className='mission_div'>
            <h1>Our Mission</h1>
            <h2>Millions of fortunate souls like you
              are willing to
              help but are concerned mainly about one
              thing that how are my
              contributions utilised and has it
              reached the intended beneficiary?</h2>
          </div>
          <div className='chartism_div'>
            <h1>At Chartism</h1>
            <h2>1. We ensure that all the beneficiaries 
            are onboarded after strict due diligence and documentation process.</h2>
            <h2>2. Each donor gets to see the proof of impact 
            transparently as they receive pictorial 
            evidence of the delivery uniquely marked with their names.</h2>
          </div>
        </div>
        <div className='works_photos_wrapper universal_container'>
          <h5 style={{
            textAlign:'center'
          }}>We ensure 100% transparency with your contribution
</h5>
<div className='work_photos_div_wrapper'>
  <div className='work_photos_div transform_rotate_right'>
    <img src={img}/>
    <h5 style={{
      textAlign:'center',
      marginTop:"10px",
      color:'black',
      fontSize:'20px',
      fontWeight:'400'
    }}>Photographic Proof</h5>
  </div>
  <div className='work_photos_div transform_rotate_left'>
    <img src={img1}/>
    <h5 style={{
      textAlign:'center',
      marginTop:"10px",
      color:'black',
      fontSize:'20px',
      fontWeight:'400'
    }}>Sponsor's Name</h5>
  </div>
</div>
        </div>
      </div>
    </>
  )
}

export default HowItWorks
