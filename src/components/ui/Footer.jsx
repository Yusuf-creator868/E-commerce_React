import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, } from 'react-icons/fa6'

export default function Footer() {
  return (
    <footer className='py-3' style={{background: '#6050DC', color: 'white'}}>
        <div className='container text-center'>
            <div className='mb-2'>
                <a href="#" className='text-white text-decoration-none mx-2'>Home</a>
                <a href="#" className='text-white text-decoration-none mx-2'>About</a>
                <a href="#" className='text-white text-decoration-none mx-2'>Shop</a>
                <a href="#" className='text-white text-decoration-none mx-2'>Contact</a>
            </div>
            <div className='mb-2'>
                <a href="#" className='text-white mx-2'><FaFacebook/></a>
                <a href="#" className='text-white mx-2'><FaTwitter/></a>
                <a href="#" className='text-white mx-2'><FaInstagram/></a>
            </div>
            <p className='small mb-0'>&copy; 2025 AlphaPrint</p>
        </div>
    </footer>
  )
}

