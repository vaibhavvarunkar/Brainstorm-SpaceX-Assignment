import React from 'react'
import spaceship from "../../../../asset/Landing/space.jpg"
import "./landing.img.styles.css"

const LandingImg = () => {
    return (
        <div className='image'>
            <img alt='spaceship' src={spaceship}></img>
        </div>
    )
}

export default LandingImg