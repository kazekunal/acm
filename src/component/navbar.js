import React from 'react'
import logo from '../assets/logo_website.png'
import '../styles/navbar.css'
import hamburger_image from '../assets/hamburger_img.png'

function Navbar(){
    const [showNav, setShowNav] = React.useState(false)
    return (
        <div className='navbar_main_container'>
            <div className='logo_container'>
                <img src={logo}/>
            </div>
            <img onClick={() => { setShowNav(!showNav) }} className='hamburger' src={hamburger_image} />
            <div className={'list_signup ' + (showNav && 'active')}>
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

export default Navbar