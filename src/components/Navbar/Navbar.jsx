import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
    return (
      <>
        <div className='navbar'>
            <div className="navbar-img">
                <img src={assets.navbar} alt="" />
            </div>
            <div className="navbar-input">
                <input type="text" placeholder='Search product/Brand/Categories' />
            </div>
            <div className='navbar-login'>
                <button>Login</button>
                <button className='signup'>Sign Up</button>
            </div>
        </div>
        <div className="navbar-store">
            <h2>My Store</h2>
            <div className='navbar-cart'>0</div>
        </div>
      </>
  )
}

export default Navbar