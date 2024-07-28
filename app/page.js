"use client"
import React from 'react'
import Nav from './Component/Nav'
import BottomTabs from './Component/Bottom'
import Categories from './Component/Categories'
import ProductCard from './Component/ProductCard'
import { CartProvider } from './CartContext'
import Link from 'next/link'
import { useRef } from 'react'
import Footer from './Component/Footer'


export default function Carts() {
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };
  const headphonesRef = useRef(null);
  const category = {
    image: 'https://w0.peakpx.com/wallpaper/530/828/HD-wallpaper-music-headphones-jbl.jpg', // Replace with the actual image path
    name: 'Speakers',
  };
  const category1 = {
    image: 'https://w0.peakpx.com/wallpaper/136/495/HD-wallpaper-earpods-iphone-apple-blue-earphones-laptop-latest-music-phone-pin.jpg', // Replace with the actual image path
    name: 'EarPhones',
  };
  return (
   
    <>
    <CartProvider>
     
   
    <Nav />

   {/* BottomTABS */}
    
      
      <BottomTabs />
      
  
     
    <div class="container h-48 flex  px-4 sm:px-6 lg:px-8">
        <Link href="/Search" class="relative">

            <input type="text" class="h-14 w-96 pr-8 pl-5  mt-16 rounded z-0 focus:shadow focus:outline-none" placeholder="Search anything..."/>

            <div class="absolute top-4 right-3">
                <i class="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
            </div>

        </Link>
    </div>
    




    <div className="p-4  -mt-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Categories</h2>
          <a href="#" className="text-green-600">See all</a>
        </div>
  
        <div className="flex space-x-4 overflow-x-scroll scrollbar-hide pb-2">
          <button className="flex-shrink-0 px-4 py-2 text-white bg-green-500 rounded-full">All</button>
          <button className="flex-shrink-0 px-4 py-2 text-black border border-gray-300 rounded-full">Smartphones</button>
          <button     onClick={() => scrollToRef(headphonesRef)} className="flex-shrink-0 px-4 py-2 text-black border border-gray-300 rounded-full">Headphones</button>
          <button className="flex-shrink-0 px-4 py-2 text-black border border-gray-300 rounded-full">Laptops</button>
          {/* Add more categories as needed */}
        </div>
      </div>


<ProductCard />


  
    
   {/* Csd */}
<div   ref={headphonesRef} className="relative h-64 w-full bg-cover bg-center rounded-lg shadow-md" style={{ backgroundImage: `url(${category.image})` }}>
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50 rounded-lg flex items-center justify-center">
        <span className="text-white text-xl font-bold">{category.name}</span>
      </div>
    </div>
    <ProductCard />
    <div  ref={headphonesRef} className="relative h-64 w-full bg-cover bg-center rounded-lg shadow-md" style={{ backgroundImage: `url(${category1.image})` }}>
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50 rounded-lg flex items-center justify-center">
        <span className="text-white text-xl font-bold">{category1.name}</span>
      </div>
    </div>
   
   <ProductCard />
       

<Footer />
    </CartProvider>
    </>
   
    
  )
}
