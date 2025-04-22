import React from 'react'
import './Home.css'
import donate from '../assets/donation.png'
import compensation from '../assets/compassion.png'
import mercy from '../assets/mercy.png'
import deal from '../assets/deal.png'
const Donar = () => {
    return (
        <>
            <div className='donar_wrapper'>
                <div className='donar_div1'>
                    <div className='donar_div_img'>
                        <img src={donate} />
                    </div>
                    <h2>&#8377; 15 Cr+</h2>
                    <p>Worth Donations</p>
                </div>


                <div className='donar_div1'>
                    <div className='donar_div_img'>
                        <img src={compensation} />
                    </div>
                    <h2>50 Lakhs +</h2>
                    <p>Lives Impacted</p>
                </div>


                <div className='donar_div1'>
                    <div className='donar_div_img'>
                        <img src={mercy} />
                    </div>
                    <h2>2,00,000+</h2>
                    <p>Unique Donars</p>
                </div>


                <div className='donar_div1'>
                    <div className='donar_div_img'>
                        <img src={deal} />
                    </div>
                    <h2>200+</h2>
                    <p>Successful Campaigns

                    </p>
                </div>


            </div>
        </>
    )
}

export default Donar
