
import React from 'react'
import { Link } from 'react-router-dom'
import { BiArrowBack } from "react-icons/bi";

const About = () => {
  return (
    <div className='pt-20'>
      <section className='max-w-[840px] container mx-auto pt-8'>
        <div>
          <Link to="/" className='flex items-center gap-3 text-[17px] text-blue-800'> <BiArrowBack /> Back to Home</Link>
        </div>
        <div className='mt-8 space-y-7'>
          <h1 className='text-4xl font-bold '>About Online Market</h1>
          <div className='w-full h-50 bg-white rounded-xl border border-gray-200 flex justify-center items-center'>
            <div className='space-y-4 w-[750px]'>
              <h2 className='text-2xl font-bold'>Our Mission</h2>
              <p className='text-[17px] text-gray-600'>Online Market is built to demonstrate a comprehensive e-commerce platform that integrates multiple APIs and data sources. Our mission is to provide a seamless shopping experience with powerful product management, real-time search, and intuitive cart management.</p>
            </div>
          </div>
          <div className='w-full h-120 bg-white rounded-xl border border-gray-200 flex justify-center items-center'>
            <div className='space-y-4 w-[750px]'>
              <h2 className='text-2xl font-bold'>Features</h2>
              <ul className='text-[17px] text-gray-600 space-y-4'>
                <li className='space-x-3'><span className='text-blue-700 font-semibold'>✓</span><span>Multi-source product integration (FakeStore, DummyJSON)</span></li>
                <li className='space-x-3'><span className='text-blue-700 font-semibold'>✓</span><span>Real-time product search and filtering</span></li>
                <li className='space-x-3'><span className='text-blue-700 font-semibold'>✓</span><span>Dynamic category organization</span></li>
                <li className='space-x-3'><span className='text-blue-700 font-semibold'>✓</span><span>Shopping cart with quantity management</span></li>
                <li className='space-x-3'><span className='text-blue-700 font-semibold'>✓</span><span>Product CRUD operations</span></li>
                <li className='space-x-3'><span className='text-blue-700 font-semibold'>✓</span><span>Recently deleted items tracking</span></li>
                <li className='space-x-3'><span className='text-blue-700 font-semibold'>✓</span><span>Dark and light theme support</span></li>
                <li className='space-x-3'><span className='text-blue-700 font-semibold'>✓</span><span>User directory integration</span></li>
                <li className='space-x-3'><span className='text-blue-700 font-semibold'>✓</span><span>Comprehensive dashboard</span></li>
              </ul>
            </div>
          </div>
          <div className='w-full h-60 bg-white rounded-xl border border-gray-200 flex justify-center items-center'>
            <div className='space-y-4 w-[750px]'>
              <h2 className='text-2xl font-bold'>Data Sources</h2>
              <p className='text-[17px] text-gray-600'>We integrate data from multiple reliable APIs:</p>
              <div>
                <ul className='text-[17px] text-gray-600 space-y-2'>
                  <li>• FakeStore API - Electronics and clothing products</li>
                  <li>• DummyJSON - Diverse product categories</li>
                  <li>• JSONPlaceholder - User data and information</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='w-full h-60 bg-white rounded-xl border border-gray-200 flex justify-center items-center'>
            <div className='space-y-4 w-[750px]'>
              <h2 className='text-2xl font-bold'>Technology</h2>
              <p className='text-[17px] text-gray-600'>Built with modern web technologies for performance and scalability:</p>
              <div>
                <ul className='text-[17px] text-gray-600 space-y-2'>
                  <li>• Next.js - React framework for production</li>
                  <li>• TypeScript - Type-safe JavaScript</li>
                  <li>• Tailwind CSS - Utility-first CSS framework</li>
                  <li>• Local Storage - Client-side data persistence</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='w-full h-55 mb-7 bg-gradient-to-r from-[#e6dfff] via-[#f5e6ff] to-[#ffd6d9] rounded-xl border border-gray-200 flex justify-center items-center'>
            <div className='space-y-4 w-[750px]'>
              <h2 className='text-2xl font-bold'>Get Started</h2>
              <p className='text-[17px] text-gray-600'>Ready to explore our marketplace? Start by browsing our products or exploring different categories.</p>
              <div className='mt-7 space-x-4'>
                <Link to="/products" className='px-6 py-3 rounded-xl bg-blue-600 text-white text-[17px] font-semibold'>View Products</Link>
                <Link to="/categories" className='border border-gray-300 px-6 py-3 rounded-xl bg-transparent text-black text-[17px] font-semibold'>Browse Categories</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
