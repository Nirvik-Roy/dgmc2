import React from 'react'
import img from '../assets/ffcb6f47-5c6c-48cf-8561-292008efb51f.png'
import img2 from '../assets/photo-1488521787991-ed7bbaae773c.avif'
import DonationAccordion from './DonationAccordion'
import payment from '../assets/164db577-ffd1-49ef-818d-6647b9f63590.png'
const DonationCampagin = () => {
  return (
    <>
     <div className='donation_campain_wrapper universal_container'>
        <div className='left_donation_campain'>
        <div className='left_donation_first_div'>
        <div className='campainger_wrapper'>
                <div className='campain_img_wrapper'>
                    <img src={img}/>
                </div>
                <div className='campain_names_wrapper'>
                    <p>Campaigner</p>
                    <h5>Shruthi</h5>
                    <div className='location_donation_campain_wrapper'>
                    <i class="fa-solid fa-location-dot"></i>
                    <h6>Leo charitable trust Animal Shelter , Challahalli, Rajanukunte, Bangalore rural, Karnataka 560064</h6>
                    </div>
                </div>
            </div>

            <h1 className='about_campain_head'>About Campaign</h1>
            <div className='video_div_campain'>
            <iframe width={'100%'} height={"100%"}
          src="https://youtu.be/4GcgI72fO4Y"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen>
  </iframe>
            
            </div>
            <p className='video_para'>For over six years, Leo Animal Shelter in Bangalore 
              has been a beacon of hope for abandoned and injured animals.
              Founded by Shruthi in 2018, this self-funded shelter has saved 
              countless lives with unconditional love and care.</p>
              <div className='campaing_img_div_56856'>
                <img src={img2}/>
              </div>
              <p className='video_para'>
              During the devastating COVID-19 pandemic, when the world 
              stood still, Leo Animal Shelter continued to stand strong,
               rescuing and nurturing every helpless animal in need. 
               But today,
               they are in crisis. They have completely run out</p>
        </div>
          

               <div className='donation_campaign_names'>
                <h3>Our Donors</h3>
                <div className='donars_tabs_wrapper'>
                    <div className='donars_btn_active'>TOP DONORS</div>
                    <div className='donars_btn'>RECENT DONORS</div>
                </div>

                <div className='donor_names_Wrapper'>
                    <div className='left_Donar_names_wrapper'>
                    {[1,2,3,4,5].map((e,i)=>{
                        return(
                            <>
                            <div className='left_donar_names'>
                            <h5>Krithi </h5>
                            <h2>₹20000</h2>
                        </div>
                            </>
                        )
                    })}
                     
                    </div>
                    <div className='right_Donar_names_wrapper'>
                    {[1,2,3,4,5].map((e,i)=>{
                        return(
                            <>
                            <div className='left_donar_names'>
                            <h5>Darshan  </h5>
                            <h2>₹20000</h2>
                        </div>
                            </>
                        )
                    })}
                    </div>
                </div>
               </div>

               <h1 className='frequently_head'>Frequently Asked Questions</h1>
               <DonationAccordion/>
        </div>
        <div className='right_donation_campain'>
        <div style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            columnGap:'4px'
        }}>
        <h3>Your donation will make a difference</h3>
        <i style={{
            color:'red'
        }} class="fa-solid fa-heart fa-beat"></i>
        </div>
           <h5>Choose an amount to donate</h5>
           <div className='donate_amount_wrapper'>
            <p>₹1500</p>
            <p>₹3000</p>
            <p>₹5000</p>
            <p>₹9999</p>
            
           </div>
           <form className='amount_form_main'>
            <label className='amount_label'>Amount (INR)</label>
            <input className='amount_input' type='text' defaultValue={1500}/>
            <p className='minimun_para'>Minimum Amount for Donation is 300 INR</p>
           </form>
           <div className='payment_img_wrapper'>
            <img src={payment}/>
           </div>
           <p className='text-center' style={{
            fontSize:'14px',
            fontWeight:'500',
            margin:'8px 0px'
           }}>We accept above payment methods

</p>
<button className='donate_btn565236'>DONATE NOW | ₹1500 </button>
        </div> 
     </div> 
    </>
  )
}

export default DonationCampagin
