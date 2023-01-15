import React from 'react'
import Daster15 from '../../assets/images/Daster/IMG-20230111-WA0019.jpg'
import Daster16 from '../../assets/images/Daster/IMG-20230111-WA0020.jpg'
import Daster17 from '../../assets/images/Daster/IMG-20230111-WA0021.jpg'
import Daster18 from '../../assets/images/Daster/IMG-20230111-WA0022.jpg'

const Hero = () => {
  return (
    <div>
        <img src={Daster15} alt="hero" />
        <img src={Daster16} alt="hero"/>
        <img src={Daster17} source="[object Object]" placeholder="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==" compresssuffix="Q75,Q50" defaultheight="750rem" alt='hero'/>
        <img src={Daster18} alt="hero" />
    </div>
  )
}

export default Hero