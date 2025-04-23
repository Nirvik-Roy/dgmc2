import React from 'react'
import gift from '../assets/gift.png'
import aid from '../assets/first-aid-kit.png'
import paw from '../assets/paws.png'
import education from '../assets/graduation-cap.png'
import children from '../assets/baby-boy.png'
import hunger from '../assets/hunger.png'
import event from '../assets/event.png'
import celebration from '../assets/celebration.png'
import img from '../assets/photo-1542810634-71277d95dcbb.avif'
import img2 from '../assets/nathan-dumlao-Xavq7lKj5j8-unsplash.jpg'
import img3 from '../assets/photo-1488521787991-ed7bbaae773c.avif'
import img4 from '../assets/photo-1567001766755-3a3775614445.avif'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const HomeCampaings = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows:true,
     
        autoplay:true,
        autoplaySpeed:2000,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
              }
            },
            {
                breakpoint: 999,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false,
                }
              },
              {
                breakpoint: 699,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false,
                }
              },
          ]
      };
  return (
    <>
      <div className='home_campaings_wrapper universal_container'>
        <h5>OUR CAMPAIGNS

</h5>
<h1>Causes you can support</h1>
<div className='campaing_input'>
<i class="fa-solid fa-magnifying-glass"></i>
<input placeholder='Search Campaigns' />
</div>
<div className='campaings_wrapper_tabs'>
    <div className='campaings_tab_active'>
        <img src={gift}/>
        <h2>All</h2>
    </div>

    <div className='campaings_tab'>
        <img src={aid}/>
        <h2>MEDICINE</h2>
    </div>

    
    <div className='campaings_tab'>
        <img src={paw}/>
        <h2>ANIMALS</h2>
    </div>

    
    <div className='campaings_tab'>
        <img src={education}/>
        <h2>EDUCATION</h2>
    </div>

    <div className='campaings_tab'>
        <img src={children}/>
        <h2>CHILDREN</h2>
    </div>

    <div className='campaings_tab'>
        <img src={hunger}/>
        <h2>HUNGER</h2>
    </div>


    <div className='campaings_tab'>
        <img src={event}/>
        <h2>MONTHLY</h2>
    </div>

    <div className='campaings_tab'>
        <img src={celebration}/>
        <h2>SPECIAL DAY</h2>
    </div>
</div>

<div className='campaings_card_wrapper'>
<Slider {...settings}>
<div className='campaings_card'>
        <img src={img}/>
        <p>Celebrate your Birthday with the kids and make your celebration more joyous</p>
        <div className='time_div_wrapper'>
            <div className='time_div'>
            <i style={{
                fontSize:'14px'
            }} class="fa-solid fa-stopwatch-20"></i>
            <p>1 days left</p>
            </div>
            <div className='time_div'>
            <i style={{
                fontSize:'12px'
            }}  class="fa-solid fa-users"></i>
            <p>4896</p>
            </div>
        </div>
        <div className='campaing_range_wrapper'>
            <div></div>
        </div>
        <button className='donate_now'>DONATE NOW</button>
    </div>

    <div className='campaings_card'>
        <img src={img2}/>
        <p>Celebrate your Birthday with the kids and make your celebration more joyous</p>
        <div className='time_div_wrapper'>
            <div className='time_div'>
            <i style={{
                fontSize:'14px'
            }} class="fa-solid fa-stopwatch-20"></i>
            <p>1 days left</p>
            </div>
            <div className='time_div'>
            <i style={{
                fontSize:'12px'
            }}  class="fa-solid fa-users"></i>
            <p>4896</p>
            </div>
        </div>
        <div className='campaing_range_wrapper'>
            <div></div>
        </div>
        <button className='donate_now'>DONATE NOW</button>
    </div>
    <div className='campaings_card'>
        <img src={img3}/>
        <p>Celebrate your Birthday with the kids and make your celebration more joyous</p>
        <div className='time_div_wrapper'>
            <div className='time_div'>
            <i style={{
                fontSize:'14px'
            }} class="fa-solid fa-stopwatch-20"></i>
            <p>1 days left</p>
            </div>
            <div className='time_div'>
            <i style={{
                fontSize:'12px'
            }}  class="fa-solid fa-users"></i>
            <p>4896</p>
            </div>
        </div>
        <div className='campaing_range_wrapper'>
            <div></div>
        </div>
        <button className='donate_now'>DONATE NOW</button>
    </div>

    <div className='campaings_card'>
        <img src={img4}/>
        <p>Celebrate your Birthday with the kids and make your celebration more joyous</p>
        <div className='time_div_wrapper'>
            <div className='time_div'>
            <i style={{
                fontSize:'14px'
            }} class="fa-solid fa-stopwatch-20"></i>
            <p>1 days left</p>
            </div>
            <div className='time_div'>
            <i style={{
                fontSize:'12px'
            }}  class="fa-solid fa-users"></i>
            <p>4896</p>
            </div>
        </div>
        <div className='campaing_range_wrapper'>
            <div></div>
        </div>
        <button className='donate_now'>DONATE NOW</button>
    </div>
</Slider>
   

   


   


   
</div>
<div className='show_button'>SHOW MORE CAMPAIGNS</div>
      </div>
    </>
  )
}

export default HomeCampaings
