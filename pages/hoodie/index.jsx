import React from 'react'
import Image from 'next/image'
import hodie from '../../assets/images/hoodie/hodie_mc_voice_fleece_hijau.jpeg'
import styles from './hoodie.module.css'
import { FloatingWhatsApp } from "react-floating-whatsapp";

const Hoodie = () => {
  return (
    <div className={styles.container}>
      <div className="title">Sweater Hoodie Polos Mcvois Pria Wanita Premium Distro</div>
      <Image height={300}  width={300} src={hodie}/>
      <FloatingWhatsApp 
        accountName='Admin Ganteng'  
        statusMessage='Admin akan selalu fast response di jam berapapun'
        chatMessage='Halo saudaraku, ada yang bisa kami bantu? 🤝'
        placeholder='Halo, bisa dikirim hari ini?' 
        phoneNumber='6281315805251'/>
    </div>
  )
}

export default Hoodie