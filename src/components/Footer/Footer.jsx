import React from 'react'
import daster from '../../assets/images/daster_every.jpeg'
import './footer.scss'
import Banktf from '../../assets/images/Bank_tf.png'
import cod from '../../assets/images/cod.png'
import ewallet from '../../assets/images/ewallet.png'
import { FaTiktok, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='footer_container'>
            <div className="about">
                <img src={daster} alt="logodaster" height={100} width={100} style={{ borderRadius: '50%' }} />
                <div className="about_text">Tentang Kami</div>
                <div className="about_contact">Hubungi Kami</div>
                <div className="confirm">Konfirmasi Pembayaran</div>
            </div>
            <div className="payment">
                <div  style={{marginBottom : '10px', fontWeight : 'bold'}}>Metode Pembayaran</div>
                <div className="payment_method">
                    <img src={Banktf} alt="" height={80} width={80} />
                    <img src={cod} alt="" height={80} width={80} />
                    <img src={ewallet} alt="" height={80} width={80} />
                </div>
            </div>
            <div className="sosmed">
                <div style={{marginBottom : '10px', fontWeight : 'bold'}}>Follow Kami</div>
                <div className="sosmed_icon">
                    <div className="sosmed_icon_single">
                        <FaTiktok />
                        <p>@daster_everywear</p>
                    </div>
                    <div className="sosmed_icon_single">
                        <FaFacebook />
                        <p>@daster_everywear</p>
                    </div>
                    <div className="sosmed_icon_single">
                        <FaInstagram />
                        <p>@daster.everywear</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer