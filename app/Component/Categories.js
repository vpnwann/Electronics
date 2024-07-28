// components/Categories.js
"use client"
import { useRef } from "react";

export default function Categories() {
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };
  const headphonesRef = useRef(null);
    return (
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
    )
  }
  