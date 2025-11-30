import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='pt-20'>
      <section className='max-w-[1350px] container mx-auto mt-12'>
        <div className='h-[412px] flex justify-between'>
          <div className='w-[600px] flex flex-col gap-5'>
            <h1 className='text-5xl font-bold text-gray-900 mt-16'>
              Your <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>Ultimate Shopping</span> Destination
            </h1>
            <p className='text-gray-600 text-[20px]'>
              Browse thousands of products, manage your cart, and enjoy seamless shopping with our modern marketplace.
            </p>
            <div className='mt-7 space-x-4'>
              <Link to="/products" className='px-8 py-3.5 rounded-xl bg-blue-700 hover:bg-blue-600 text-white text-[17px] font-semibold'>
                Start Shopping
              </Link>
              <Link to="/categories" className='border-2 border-blue-600 hover:bg-gray-200 px-8 py-3 rounded-xl bg-transparent text-black text-[17px] font-semibold'>
                Browse Categories
              </Link>
            </div>
          </div>
          <div className='w-[600px] '>
            <div className='space-y-8'>
              <div className='flex justify-between'>
                <div className='w-70 h-70 bg-gradient-to-r from-[#e6dfff] via-[#f5e6ff] to-[#ffd6d9] rounded-xl flex justify-center items-center text-[16px] font-semibold'>Fast Shopping</div>
                <div className='w-70 h-70 bg-gradient-to-r from-[#e6dfff] via-[#f5e6ff] to-[#ffd6d9] rounded-xl flex justify-center items-center text-[16px] font-semibold'>Secure</div>
              </div>
              <div className='w-full h-30 bg-gradient-to-r from-[#e6dfff] via-[#f5e6ff] to-[#ffd6d9] rounded-xl flex justify-center items-center text-[16px] font-semibold'>Best Deals</div>
            </div>
          </div>
        </div>


        {/* Why Choose Us? */}
        <div className='mt-40'>
          <h1 className='text-3xl font-bold'>Why Choose Us?</h1>

          <div>
            <div className='w-30 h-10 border-2'></div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home