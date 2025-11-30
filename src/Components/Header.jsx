import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import uzum from '../images/market-logo.png'
import { TiShoppingCart } from "react-icons/ti";

const Header = () => {
  return (
    <header className='w-full fixed top-0 left-0 z-50 shadow-sm border-b bg-white border-b-gray-100'>
      <nav className='max-w-[1350px] mx-auto h-[70px] flex justify-between items-center px-4'>
        <div className='flex items-center gap-3'>
          <img src={uzum} alt="" className='w-8 h-8' />
          <h1 className='text-2xl font-bold'>Online Market</h1>
        </div>
        <div className='text-[16px] font-semibold flex gap-4 text-black'>
          <NavLink to='/' className='hover:bg-gray-200 px-3 py-1 rounded-lg transition'>Home</NavLink>
          <NavLink to='/categories' className='hover:bg-gray-200 px-3 py-1 rounded-lg transition'>Categories</NavLink>
          <NavLink to='/products' className='hover:bg-gray-200 px-3 py-1 rounded-lg transition'>All Products</NavLink>
          <NavLink to='/cart' className='hover:bg-gray-200 px-3 py-1 rounded-lg transition'>Cart</NavLink>
          <NavLink to='/users' className='hover:bg-gray-200 px-3 py-1 rounded-lg transition'>Users</NavLink>
          <NavLink to='/about' className='hover:bg-gray-200 px-3 py-1 rounded-lg transition'>About</NavLink>
        </div>
        <div className='flex gap-5 items-center'>
          <Link to='/shoppingcart' className=''>
            <TiShoppingCart className='text-black text-[22px] rounded-sm  cursor-pointer hover:bg-gray-200 transition' />
          </Link>

          <div className='space-x-2 flex'>
            <Link
              to="/login"
              className="w-20 h-10 border border-gray-300 rounded-xl flex justify-center items-center"
            >
              Login
            </Link>

            <Link
              to="/sign-up"
              className="w-24 h-10 bg-blue-600 rounded-xl text-white flex justify-center items-center"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
