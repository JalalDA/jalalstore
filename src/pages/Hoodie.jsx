import React from 'react'
import fleceHIjau from '../assets/images/hoodie/hodie_mc_voice_fleece_hijau.jpeg'
import hodieMcVois from '../assets/images/hoodie/hodie_mc_vois.jpeg'
import hodieMcVoisBlack from '../assets/images/hoodie/hodiee_mcvoice_1.jpeg'
import hodieMcVoisTurkis from '../assets/images/hoodie/MCVoice_flece_turkis.jpeg'
import hodieMcVoisMustard from '../assets/images/hoodie/MCVoice_mustard.jpeg'
import hodieMcVoisMaroon from '../assets/images/hoodie/MCVoiceMaroon.jpeg'
import hodieMcVoisNavy from '../assets/images/hoodie/MCVoiceNavy.jpeg'
import hodieMcVoisPink from '../assets/images/hoodie/MCVoicePiink.jpeg'
import hodieMcVoisTosca from '../assets/images/hoodie/MCVoiceTosca.jpeg'
import hodieMcVoisLilac from '../assets/images/hoodie/MCVoisLilac.jpeg'
import HeroSlider from '../components/HeroSlider'
import {FloatingWhatsApp} from 'react-floating-whatsapp'

const Hoodie = () => {

    const hoodieImage = [
        fleceHIjau,
        hodieMcVois,
        hodieMcVoisBlack,
        hodieMcVoisMaroon,
        hodieMcVoisMustard,
        hodieMcVoisNavy,
        hodieMcVoisTurkis,
        hodieMcVoisPink,
        hodieMcVoisTosca,
        hodieMcVoisLilac
    ]

    return (
        <div className="hoodie-container">
            <div className="header">
                <div className="header-title">Paket Hemat Combo!!!</div>
                <div className="header-title">Sweater Hoodie terbaru dari Mcvois</div>
                <div className='header-title'>Sweater Hoodie Polos Mcvois Pria Wanita Premium Distro</div>
            </div>
            <HeroSlider dataSlider={hoodieImage} />
            <div className="hero">
                <div className="hero-text">MAU TAMPIL KECE DENGAN HARGA OKE. MAU TAMPIL KEKINIAN TAPI TAKUT MAHAL. DON'T WORRY GUYS. DI KAMI KALIAN BISA TAMPIL KEREN GK PAKE MAHAL.
                    KARNA HARGA YANG KAMI JUAL HARGA RAKYAT KUALITAS KONGLOMERAT👌</div>
                <div className="hero-text">BELI BANYAK BISA MURAH</div>
                <div className="hero-text">“CATATAN : Free Sticker x Packing Rapih x Pengiriman Cepat.</div>
                <div className="hero-text">“KETERANGAN: Sweater Hoodie Dengan Bahan Fleece Tebal, JAHITAN RAPIH. Bahan Tidak Kasar, Lembur Di Pakai, Warna Aman Tidak Akan Luntur Saat Di Cuci, Tidak Mudah Berbulu, Cocok Buat Di Pakai Sehari Hari 😊</div>
                <div className="hero-text">KETERANGAN SIZE : LINGKAR DADA, LEBAR di x2
                    • M  = Lebar Dada 54cm x Panjang Tangan 62cm x Panjang Badan 68cm

                    • L  = Lebar Dada 56cm x Panjang Tangan 63cm x Panjang Badan 70cm

                    • XL  = Lebar Dada 58cm x Panjang Tangan 64cm x Panjang Badan 72cm

                    Real Pic 100% Barang Sesuai Gambar

                    ••••HIGH QUALITY DISTRO×BARANG PREMIUM••••</div>
            <div className="hero-text">
                Cara Pemesanan : Langsung Hubungi WA Admin dengan menekan tombol wa di bawah
            </div>
            </div>
            <FloatingWhatsApp 
                chatMessage='Barangnya ready dan bisa dikirim hari ini ya '
                accountName='Admin Ganteng'
                statusMessage='Selalu siap melayani anda'
                placeholder='Bisa dikirim hari ini?'
                phoneNumber='6281315805251'/>
        </div>
    )
}

export default Hoodie