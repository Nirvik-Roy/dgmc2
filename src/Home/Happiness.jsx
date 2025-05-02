import React from 'react'
import img from '../assets/b5f0b2e4-c815-4238-8ba5-3ad20ff1b99a.png'
const Happiness = () => {
  return (
    <>
      <div className='happiness_wrapper universal_container'>
        <div className='happiness_left'>
            <h1>Let's bring more happiness together!
</h1>
<p>Become a social change evangelist within your company! Support for causes that matter to bring a change. Lead an example and inspire others by creating a positive impact both inside and outside the workplace. Together, we can make a difference!

</p>
<button>START NOW</button>
        </div>
        <div className='happiness_right'>
            <img style={{
                width:'100%'
            }} src={img}/>
        </div>
      </div>
    </>
  )
}

export default Happiness
