import React from 'react'
// import izzatLogo from '../../assets/images/izzatstore.png'
import daster from '../../assets/images/daster_every.jpeg'
import {IoSearch, IoCart} from 'react-icons/io5'
import './header.scss'

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo">
        <img src={daster} height={100} width={100} alt="" />
      </div>
      <div className="search">
        <input style={{paddingLeft : 10}} placeholder='Cari disini ...' type="text"/>
        <div className="search-btn">
          <IoSearch color='#FFFFFF'/>
        </div>
      </div>
      <div className="auth">
        <IoCart className='cart'/>
        <div className="btn-auth">Login</div>
        <div className="btn-auth">Register</div>
      </div>
    </div>
  )
}

export default Header