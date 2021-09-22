import React from 'react'
import Field from './Field'
import {SiInstagram , SiFacebook , SiTwitter} from "react-icons/si"
function About() {
    return (
        <div className="footer" id="aboutus">
            <div className="about">
                <h4 style = {{ color: "lightgreen" }} >Medicon Pharmacy</h4>
                <div><strong>Email:</strong> mediconpharmacy@gmail.com</div>
                <div><strong>Phone:</strong> +91 865321474</div>
                <div><strong>Follow Us</strong></div>
                <div className="flex">
                    <SiInstagram size = "30"className="icons icons-zoom" />
                    <SiFacebook size = "30" className="icons icons-zoom"/>
                    <SiTwitter size = "30" className="icons icons-zoom"/>
                </div>
            </div>
            <div className = "contact">
                <h4 style = {{ color: "lightgreen" }} >Contact Us</h4>
                <Field name = "Email" type = "email" />
                <Field name = "Name" type = "text" />
                <textarea placeholder="Comments..." className="text-area" /> <br />
                <button className = "btn btn-danger" >Submit</button>
            </div>
        </div>
    )
}

export default About
