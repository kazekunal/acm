import React from 'react'
import logo from '../assets/logo_website.png'
import '../styles/navbar.css'

function navbar(){
    return (
        <div className='navbar_main_container'>
            <div className='logo_container'>
                <img src={logo}/>
            </div>
            <div className='list_signup'>
                <div className='list_container'>
                    <p>product</p>
                    <p>Explore</p>
                    <p>Resources</p>
                    <p>Pricing</p>
                </div>
                <div className='signup_container'>
                    <p>Signup</p>
                </div>
            </div>
        </div>
    )
}

export default navbar