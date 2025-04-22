import React from 'react'
import img from '../assets/b6c3c091-9415-47e6-bb4b-9eb514ad4807.webp'
import img2 from '../assets/da99821d-1cbf-4260-b00d-7a960e423598.webp'
import img3 from '../assets/b87dc1f3-c8e9-4062-b013-6cba6dd3251a.webp'
import img4 from '../assets/02891b11-1df6-43fa-91ce-ddeda3d5fe34.webp'
import img6 from '../assets/bc021ed4-c112-433d-bbf2-81216984dd0e.webp'
import img5 from '../assets/6f763e08-bb5a-4c8d-93ea-ad90c3629c3b.webp'
const SocialRecognition = () => {
  return (
    <>
      <div className='social_wrapper universal_container'>
      <h1>Social Recognition</h1>
      <h6>Our unique model has been recognized by more than 10 social influencers. Some celebrities also came forward to provide a helping hand to those in need.</h6>
      <div className='social_wrapper_main'>
      <div className='social_div1'>
            <div className='social_img_div'>
                <img src={img}/>
            </div>
            <p>Zayn Malik</p>
        </div>

        <div className='social_div1'>
            <div className='social_img_div'>
                <img src={img2}/>
            </div>
            <p>Sidhu Moose Wala</p>
        </div>

        <div className='social_div1'>
            <div className='social_img_div'>
                <img src={img3}/>
            </div>
            <p>Sasha Malik</p>
        </div>

        <div className='social_div1'>
            <div className='social_img_div'>
                <img src={img4}/>
            </div>
            <p>Rubina Dilaik</p>
        </div>

        <div className='social_div1'>
            <div className='social_img_div'>
                <img src={img6}/>
            </div>
            <p>Meghna Kaur
</p>
        </div>


        <div className='social_div1'>
            <div className='social_img_div'>
                <img src={img}/>
            </div>
            <p>Zayn Mallick</p>
        </div>
      </div>
      
      </div>
    </>
  )
}

export default SocialRecognition
