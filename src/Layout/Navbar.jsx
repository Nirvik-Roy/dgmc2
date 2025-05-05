import React, { useState } from 'react'
import logo from '../assets/939610874_dream.png'
import { NavLink, useNavigate } from 'react-router-dom'
import world from '../assets/world.png'
import Sidebar from './Sidebar'

const Navbar = () => {
    const [nav,setnav]=useState(false);
    const navigate = useNavigate()
    return (
        <>
 <Sidebar nav={nav} setnav={setnav}/>
            <div className='nav_wrapper'>

                <div className='nav_wrapper_main universal_container'>
                    <div className='nav_logo_div_wrapper'>
                        <div onClick={(()=>navigate('/'))} className='nav_logo_div'>
                            <img src={logo} />
                        </div>
                        <div className='nav_links_wrapper'>
                        <NavLink to={'/'}>Home</NavLink>
                            <NavLink>About Us</NavLink>
                            <NavLink to={'/howitworks'}>How it Works</NavLink>
                            <NavLink to={'/donation'}>Donate Now</NavLink>
                            {/* <NavLink>Explore Campaigns</NavLink>
                            <NavLink>Date Monthly</NavLink>
                            <NavLink>Start Campaign</NavLink> */}
                        </div>
                    </div>
                    <i onClick={(()=>{setnav(!nav)})} class="fa-solid fa-bars-staggered"></i>
                    <div className='nav_buttons_wrapper'>
                        <div className='currency_slect_div'>
                            <div className='currency_city_circle'>
                                <img src={world} />
                            </div>
                            <p>&#8377;</p>
                            <p>(INR)</p>
                            <i class="fa-solid fa-angle-down"></i>
                        </div>

                        <div className='currency_slect_div'>

                            <p>LOGIN</p>


                        </div>

                        <div className='currency_slect_div_active'>

                            <p>Gift Cart</p>


                        </div>
                    </div>
                </div>





            </div>
        </>
    )
}

export default Navbar
