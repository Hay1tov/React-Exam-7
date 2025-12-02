import React from 'react'
import { Link } from 'react-router-dom'   // <-- MUHIM!

const Footer = () => {
  return (
    <footer className='w-full bg-white'>
      <div className='max-w-[1350px] container mx-auto'>

        <div className='flex justify-between p-14 border-b-2 border-gray-200'>
          
          <div className='space-y-2'>
            <h3 className='text-[16px] font-semibold'>Online Market</h3>
            <p className='footer-text-p'>Your one-stop shop for everything.</p>
          </div>

          <div className='space-y-2'>
            <h3 className='text-[16px] font-semibold'>Quick Links</h3>
            <div className='flex flex-col gap-1 footer-text-p'>
              <Link to="/products">Products</Link>
              <Link to="/categories">Categories</Link>
              <Link to="/cart">Cart</Link>
            </div>
          </div>

          <div className='space-y-2'>
            <h3 className='text-[16px] font-semibold'>Support</h3>
            <div className='flex flex-col gap-1 footer-text-p'>
              <Link to="/about">About</Link>
              <Link to="/">Contact</Link>
            </div>
          </div>

          <div className='space-y-2'>
            <h3 className='text-[16px] font-semibold'>Follow Us</h3>
            <div className='flex flex-row gap-2 footer-text-p'>
              <Link to="/">Twitter</Link>
              <Link to="/">Facebook</Link>
            </div>
          </div>

        </div>

        <p className='footer-text-p text-center pt-8 pb-12'>© 2025 ShopHub. All rights reserved.</p>

      </div>
    </footer>
  )
}

export default Footer
