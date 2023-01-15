import React from 'react'
import Header from '../components/header/Header'
import Menu from '../components/menu/Menu'
import Tab from '../components/tab/Tab'
import HeroSliderComponent from '../components/HeroSlider'
import Daster15 from '../assets/images/Daster/IMG-20230111-WA0019.jpg'
import Daster16 from '../assets/images/Daster/IMG-20230111-WA0020.jpg'
import Daster17 from '../assets/images/Daster/IMG-20230111-WA0021.jpg'
import Daster18 from '../assets/images/Daster/IMG-20230111-WA0022.jpg'
import ProductsForYou from '../components/ProductsForYou/ProductsForYou'
import browngold from '../assets/images/browngold.png'

const Home = () => {
  const data = [
    Daster15,
    Daster16,
    Daster17,
    Daster18
  ]
  return (
    <div>
      <Header/>
      <div className="p-10" style={{padding:" 0px 100px", backgroundImage : `url(${browngold})`, backgroundRepeat : 'no-repeat', backgroundSize : 'cover' }}>
        <Menu/>
        <Tab/>
        <HeroSliderComponent dataSlider={data}/>
        <ProductsForYou/>
      </div>
    </div>
  )
}

export default Home