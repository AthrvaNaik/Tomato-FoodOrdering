import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>

        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt=""  />
                <div className="footer-social-icon">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>

            </div>

            <div className="footer-content-center">
                <h2>Company</h2>
                <ul>
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Delivery</li>
                  <li>Privacy Policy</li>
                </ul>
            </div>

            <div className="footer-content-right">
              <h2>Get In Touch</h2>
              <ul>
                <li>+91-7666876552</li>
                <li>contact@tomato.in</li>
              </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2025 © Tomato.in - All Right Reserved</p>

    </div>
  )
}

export default Footer