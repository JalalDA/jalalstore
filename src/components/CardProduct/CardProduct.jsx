import React from 'react'
import { AiFillStar } from "react-icons/ai";
import './cardproduct.scss'
import { useNavigate } from 'react-router-dom';

const CardProduct = ({item}) => {
  const navigate = useNavigate()
  return (
    <div onClick={()=>{
      navigate('product')
    }} className='cardProduct'>
        <img src={item?.image} alt="" />
        <div className="productInfo">
            <p className='name'>{item?.name}</p>
            <p className='price'>{item?.price}</p>
            <p className='discount'>- {item.discount}</p>
            <div className="star">
                <AiFillStar color='#dec189'/>
                <AiFillStar color='#dec189'/>
                <AiFillStar color='#dec189'/>
                <AiFillStar color='#dec189'/>
            </div>    
        </div>
    </div>
  )
}

export default CardProduct