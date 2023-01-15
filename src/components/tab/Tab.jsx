import React, { useState } from 'react'
import './tab.scss'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

const Tab = () => {
  const tab = [
    "Kategori",
    "Halaman Muka",
    "Semua Produk",
    "Pesta Gajian",
    "Profile"
  ]
  const categories = [
    "Herbal",
    "Alat Make Up",
    "Madame Gie",
    "MARWAH",
    "RORO MENDUT - FACE",
    "ATK",
    "Aksesoris Rambut",
    "Mom & Kids",
    "PERLENGKAPAN MEDIS",
    "MS GLOW",
    "B ERL",
    "JUSTMINE",
    "JORDANIE",
    "CLARESTA",
    "SATTO"
  ]
  const [tabActive, setTabActive] = useState("Halaman Muka")
  const [catActive, setCatActive] = useState(false)
  return (
    <div className='tabmenu'>
      {tab.map((item, index) => {
        console.log(tabActive, item);
        return (
          <div key={index} className="item">
            <div onClick={() => {
              setTabActive(item)
            }} className={tabActive === item ? "tabActive" : "tab"}>{item}</div>
            {item === "Kategori" && <MdOutlineKeyboardArrowDown onClick={()=>{
              setCatActive(!catActive)
              setTabActive(item)
            }} className='arrowIcon' />}
          </div>
        )
      })}
      <div className={catActive ? "categoriesActive" :"categories"}>
        {categories.map((item, index)=>(
          <div key={index} className="category">{item}</div>
        ))}
      </div>
    </div>
  )
}

export default Tab