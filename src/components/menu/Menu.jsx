import React from 'react'
import {IoStorefrontOutline} from 'react-icons/io5'
import { IoMdChatboxes } from "react-icons/io";
import daster from '../../assets/images/daster_every.jpeg'
import browngold from '../../assets/images/browngold.png'

import './styles.scss'

const Menu = () => {
  return (
    <div className='menu'>
        <div className="container">
            <div className="menu-left">
                <div className="wrapper">
                    <div className="kiri">
                        <div className="logo">
                                <img src={daster} alt="" />
                            </div>
                            <div className="toko">
                                <div className="nama">Daster_Everywear</div>
                                <div className="follower">200000 Pengikut</div>
                                <div className="penilaian">100% Penilaian Positif Seller</div>
                            </div>
                    </div>
                    <div className="kanan">    
                        <div className="chat">
                            <span>
                                <IoMdChatboxes className='img-chat'/>
                                Chat Now
                            </span>
                        </div>
                        <div className="ikuti">
                            <span>
                                <IoStorefrontOutline className='img-store'/>
                                IKUTI
                            </span>

                        </div>
                    </div>
                </div>               
            </div>
            <div className="menu-right">
                <button>Jadi reseller</button>
            </div>
        </div>
    </div>
  )
}

export default Menu