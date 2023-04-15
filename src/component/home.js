import React from 'react'
import '../styles/home.css'
import background_image from '../assets/dashboard-image.png'

function Home() {
  return (
    <>
    <div className='home_button'>
        <p>
            Just launched ghost 5.0
        </p>
    </div>
    <div className='home_heading'>
        <p>
            Turn your audience <br/><span className='business'> into a  business </span> 
        </p>
    </div>
    <div className='home_background'></div>
    <div className='home_image'>
        <img src={background_image} alt='img'/>
    </div>
    </>
  )
}

export default Home