import React from 'react'
import CardProduct from '../CardProduct/CardProduct'
import Daster18 from '../../assets/images/Daster/IMG-20230111-WA0022.jpg'
import './styles.scss'

const ProductsForYou = () => {
    const products = [
        {
            image: Daster18,
            name: "Marwah Facial wash Perfect white - sabun wajah",
            price: "Rp42.383",
            discount: "27%"
        },
        {
            image: Daster18,
            name: "Marwah Facial wash Perfect white - sabun wajah",
            price: "Rp42.383",
            discount: "27%"
        },
        {
            image: Daster18,
            name: "Marwah Facial wash Perfect white - sabun wajah",
            price: "Rp42.383",
            discount: "27%"
        },
        {
            image: Daster18,
            name: "Marwah Facial wash Perfect white - sabun wajah",
            price: "Rp42.383",
            discount: "27%"
        }, {
            image: Daster18,
            name: "Marwah Facial wash Perfect white - sabun wajah",
            price: "Rp42.383",
            discount: "27%"
        },
        {
            image: Daster18,
            name: "Marwah Facial wash Perfect white - sabun wajah",
            price: "Rp42.383",
            discount: "27%"
        },
        {
            image: Daster18,
            name: "Marwah Facial wash Perfect white - sabun wajah",
            price: "Rp42.383",
            discount: "27%"
        },
        {
            image: Daster18,
            name: "Marwah Facial wash Perfect white - sabun wajah",
            price: "Rp42.383",
            discount: "27%"
        },
        {
            image: Daster18,
            name: "Marwah Facial wash Perfect white - sabun wajah",
            price: "Rp42.383",
            discount: "27%"
        },
        {
            image: Daster18,
            name: "Marwah Facial wash Perfect white - sabun wajah",
            price: "Rp42.383",
            discount: "27%"
        },
        {
            image: Daster18,
            name: "Marwah Facial wash Perfect white - sabun wajah",
            price: "Rp42.383",
            discount: "27%"
        },
        {
            image: Daster18,
            name: "Marwah Facial wash Perfect white - sabun wajah",
            price: "Rp42.383",
            discount: "27%"
        },
        {
            image: Daster18,
            name: "Marwah Facial wash Perfect white - sabun wajah",
            price: "Rp42.383",
            discount: "27%"
        },
        {
            image: Daster18,
            name: "Marwah Facial wash Perfect white - sabun wajah",
            price: "Rp42.383",
            discount: "27%"
        },
        {
            image: Daster18,
            name: "Marwah Facial wash Perfect white - sabun wajah",
            price: "Rp42.383",
            discount: "27%"
        },
        {
            image: Daster18,
            name: "Marwah Facial wash Perfect white - sabun wajah",
            price: "Rp42.383",
            discount: "27%"
        },
        {
            image: Daster18,
            name: "Marwah Facial wash Perfect white - sabun wajah",
            price: "Rp42.383",
            discount: "27%"
        },
        {
            image: Daster18,
            name: "Marwah Facial wash Perfect white - sabun wajah",
            price: "Rp42.383",
            discount: "27%"
        },{
            image: Daster18,
            name: "Marwah Facial wash Perfect white - sabun wajah",
            price: "Rp42.383",
            discount: "27%"
        },
        
    ]
    return (
        <div>
            <h3 className='titlefor'>Hanya Untukmu</h3>
            <div className='testGrid'>
                {products.map((item, index) => (
                    <CardProduct key={index} item={item} />
                ))}
            </div>
        </div>
    )
}

export default ProductsForYou