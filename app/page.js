"use client"
import React from 'react'
import Nav from './Component/Nav'
import BottomTabs from './Component/Bottom'

import { CartProvider } from './CartContext'

import { useRef } from 'react'
import Footer from './Component/Footer'
import Speakers from './Component/fx1/Speakers'
import Earphones from './Component/fx1/Earphones'
import Mobiles from './Component/fx1/MobilePhones'

import Link from 'next/link'
import dynamic from 'next/dynamic';
import ImageCarousel from './Component/ImgCarousel'
import ImageCard from './Component/ImageCard'


export default function Carts() {
  
  const imageUrl = 'https://images.unsplash.com/photo-1594904578869-c011783103c7?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=allphoto-bangkok-GfXqtWmiuDI-unsplash.jpg&w=2400';
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
  const category2 = {
    image: 'https://images-cdn.ubuy.co.in/634d39ffc8401a5c1a475b0d-perusha-metallic-dummy-phone-display.jpg', // Replace with the actual image path
    name: 'MobilePhones',
  };


  const images = [
    {
      src: 'https://m.media-amazon.com/images/G/31/Laptops/May24_BrandBanners/Dell_BAU_i5_978._SS900_QL85_.jpg',
      alt: 'Image 1',
      caption: 'Caption for Image 1'
    },
    {
      src: 'https://m.media-amazon.com/images/G/31/img24/Wireless/Madhav/July/HMD/Launch2/D147454905_Launch_Latest-launches_557x742._SS600_QL85_.jpg',
      alt: 'Image 2',
      caption: 'Caption for Image 2'
    },
    {
      src: 'https://m.media-amazon.com/images/G/31/img24/Wireless/Samsung/Tiles/21stJuly/DD142626032_IN_WLD_Samsung_M35-5G_Launch_Latest-launches_557x742._SS600_QL85_.jpg',
      alt: 'Image 3',
      caption: 'Caption for Image 3'
    }
  ];

  return (
   
    <>
    <CartProvider>
     
   
    <Nav />

   {/* BottomTABS */}
    
      
      <BottomTabs />
     
    <Link href="/Search">
<form class="max-w-md mx-auto mt-40 ">   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />

    </div>
</form>
</Link>

    



    <div className='  mt-10'>
      <ImageCarousel images={images} />
      </div>

      <ImageCard/>
    <div className="p-4  -mt-30">
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




  
     
   {/* Csd */}
<div   ref={headphonesRef} className="relative h-64 w-full bg-cover bg-center rounded-lg shadow-md" style={{ backgroundImage: `url(${category.image})` }}>
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50 rounded-lg flex items-center justify-center">
        <span className="text-white text-xl font-bold">{category.name}</span>
      </div>
    </div>
    <Speakers/>
    <div  ref={headphonesRef} className="relative h-64 w-full bg-cover bg-center rounded-lg shadow-md" style={{ backgroundImage: `url(${category1.image})` }}>
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50 rounded-lg flex items-center justify-center">
        <span className="text-white text-xl font-bold">{category1.name}</span>
      </div>
    </div>
  <Earphones />


  <div  ref={headphonesRef} className="relative h-64 w-full bg-cover bg-center rounded-lg shadow-md" style={{ backgroundImage: `url(${category2.image})` }}>
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50 rounded-lg flex items-center justify-center">
        <span className="text-white text-xl font-bold">{category2.name}</span>
      </div>
    </div>
  <Mobiles />
 
       

<Footer />
    </CartProvider>
    </>
   
    
  )
}
