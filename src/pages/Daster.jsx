import React, { useEffect } from 'react'
import Daster0 from '../assets/images/Daster/IMG-20230111-WA0004.jpg'
import Daster1 from '../assets/images/Daster/IMG-20230111-WA0005.jpg'
import Daster2 from '../assets/images/Daster/IMG-20230111-WA0006.jpg'
import Daster3 from '../assets/images/Daster/IMG-20230111-WA0007.jpg'
import Daster4 from '../assets/images/Daster/IMG-20230111-WA0008.jpg'
import Daster5 from '../assets/images/Daster/IMG-20230111-WA0009.jpg'
import Daster6 from '../assets/images/Daster/IMG-20230111-WA0010.jpg'
import Daster7 from '../assets/images/Daster/IMG-20230111-WA0011.jpg'
import Daster8 from '../assets/images/Daster/IMG-20230111-WA0012.jpg'
import Daster9 from '../assets/images/Daster/IMG-20230111-WA0013.jpg'
import Daster10 from '../assets/images/Daster/IMG-20230111-WA0014.jpg'
import Daster11 from '../assets/images/Daster/IMG-20230111-WA0015.jpg'
import Daster12 from '../assets/images/Daster/IMG-20230111-WA0016.jpg'
import Daster13 from '../assets/images/Daster/IMG-20230111-WA0017.jpg'
import Daster14 from '../assets/images/Daster/IMG-20230111-WA0018.jpg'
import Daster15 from '../assets/images/Daster/IMG-20230111-WA0019.jpg'
import Daster16 from '../assets/images/Daster/IMG-20230111-WA0020.jpg'
import Daster17 from '../assets/images/Daster/IMG-20230111-WA0021.jpg'
import Daster18 from '../assets/images/Daster/IMG-20230111-WA0022.jpg'

import { FloatingWhatsApp } from 'react-floating-whatsapp'
import HeroSliderComponent from '../components/HeroSlider'
import { getProvince } from '../modules/RajaOngkir'


const Daster = () => {
    const daster = [
        Daster0,
        Daster1,
        Daster2,
        Daster3,
        Daster4,
        Daster5,
        Daster6,
        Daster7,
        Daster8,
        Daster9,
        Daster10,
        Daster11,
        Daster12,
        Daster13,
        Daster14,
        Daster15,
        Daster16,
        Daster17,
        Daster18
    ]
    console.log(`Apikey :` , process.env.REACT_APP_RAJA_ONGKIR);

    const getMasterProvince = async ()=>{
        try {
            const result = await getProvince()
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getMasterProvince()
    })
  return (
    <div className='daster_container'>
        <HeroSliderComponent dataSlider={daster} />
        <FloatingWhatsApp 
                chatMessage='Barangnya ready dan bisa dikirim hari ini ya '
                accountName='Admin Ganteng'
                statusMessage='Selalu siap melayani anda'
                placeholder='Bisa dikirim hari ini?'
                phoneNumber='6281315805251'/>
    </div>
  )
}

export default Daster