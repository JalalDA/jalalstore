import React, { useState } from 'react'
import Header from '../components/header/Header'
import Daster18 from '../assets/images/Daster/IMG-20230111-WA0022.jpg'
import Footer from '../components/Footer/Footer'

const Product = () => {
    const [count, setCount] = useState(1)
    return (
        <div className='product-container'>
            <Header />
            <div className="detail_product">
                <div className="product_image">
                    <img style={{ height: "100%", width: '100%', borderRadius: '8px' }} src={Daster18} alt="" />
                </div>
                <div className="product_info">
                    <div className="product_name">Daster Sambung</div>
                    <div className="product_price">Rp 35.000</div>
                    <div className="product_color">
                        <select name="Pilih Warna" id="">
                            <option value="">Merah</option>
                            <option value="">Biru</option>
                            <option value="">Coklat</option>
                            <option value="">Hijau</option>
                        </select>
                    </div>
                    <div className="product_color">
                        <select name="Pilih Ukuran" id="">
                            <option value="">M</option>
                            <option value="">L</option>
                            <option value="">XL</option>
                            <option value="">XXL</option>
                        </select>
                    </div>
                    <div className="count">
                        <div onClick={() => {
                            if (count !== 1) {
                                setCount(count - 1)
                            }
                        }} className="minus"> - </div>
                        <div className="value">{count}</div>
                        <div onClick={() => {
                            setCount(count + 1)
                        }} className="plus"> + </div>
                    </div>
                    <div className="buy_now">Beli Sekarang</div>
                    <div className="buy_now">Tambahkan Ke Keranjang</div>
                </div>
            </div>
            <div className="deskripsi_product">
                <div className="bold">Deskripsi Produk</div>
                <div className="description_text">
                    Tersedia untuk semua ukuran<br/>
                    - Bahan Adem dan Lembut<br />
                    - Sangat nyaman untuk di pakai bersantai <br />
                    - Harga sangat murah <br />
                    - Bisa bayar ditempat <br />
                    - Belanja aman tanpa khawatir ketipu <br />
                    - Tersedia untuk banyak pilihan warna <br />
                    - Material bahan : Cotton Linen <br />
                    - Ld 110-115cm panjang 100-110 cm <br />
                    - Muat bb 65kg <br />
                    - Bahan non obras  <br />
                    - Model kancing, non kancing, kerut, dan yukensi
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Product