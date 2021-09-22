import React from 'react'
import Image from './assets/banner.png'
function Banner() {
    return (
        <div className="banner-img">
            <img src = {Image} alt = "" className = {"image"} />
        </div>
    )
}

export default Banner
