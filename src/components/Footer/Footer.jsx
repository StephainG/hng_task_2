import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
          <div className="footer-content">
              <div className="footer-content-left">
                  <img src="" alt="" />
                  <h1>My Store</h1>
                  <p>DOWNLOAD MyStore FREE APP</p>
                  <p>Get access to our lates exclusive offer</p>
                  <div className="app-download-platforms">
                    <img src={assets.play_store} alt="" />
                    <img src={assets.app_store} alt="" />
                  </div>
              </div>
              <div className="footer-content-right">
                  <h2>NEW TO MY STORE</h2>
                  <p>Subscribe to our newsletter to get updates on our latest offers!</p>
                  <input type="text" />
                  <div className='footer-checkbox'>
                      <input type="checkbox" />
                        <p>I agree to Jumia’s Privacy and Cookie Policy. You can unsubscribe from newsletters at any time. I accept the legal Terms</p>
                    </div>
              </div>
          </div>
          <div className="footer-services">
              <div>
                  <p>Fast & Prompt</p>
                  <p>Delivery</p>
              </div>
              <div>
                  <p>24/7 Support</p>
                  <p>+23455667865</p>
              </div>
              <div>
                  <p>Best Price</p>
                  <p>Guarantee</p>
              </div>
              <div>
                  <p>A week</p>
                  <p>Return Policy</p>
              </div>
              <div>
                  <p>100%</p>
                  <p>Insured</p>
              </div>
          </div>
    </div>
  )
}

export default Footer