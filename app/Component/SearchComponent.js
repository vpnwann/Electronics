"use client";
import { useState, useEffect, useContext } from 'react';
import { database, ref, onValue } from '../firebase'; // Adjust the import path


import Link from 'next/link';
const SearchComponent = () => {
  
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchTerm.trim() !== '') {
      const dbRef = ref(database, 'Ecom'); // Root reference to search the whole database
      onValue(dbRef, (snapshot) => {
        const data = snapshot.val();
        const filteredResults = [];

        if (data) {
          // Recursively search through all keys for 'name' field
          const searchRecursive = (obj) => {
            for (const key in obj) {
              if (typeof obj[key] === 'object') {
                searchRecursive(obj[key]);
              } else if (key === 'title' && obj[key].toLowerCase().includes(searchTerm.toLowerCase())) {
                filteredResults.push(obj);
                break; // Stop further traversal if name is matched
              }
            }
          };

          searchRecursive(data);
        }

        setSearchResults(filteredResults);
      });
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  const handleSearch = () => {
    setSearchTerm(document.getElementById('search-input').value);
  };

  const handleKeyPress = (event) => {
    // Trigger button click event when Enter key is pressed
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>
    <Link href="/">
     <button
      
      className=" text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
    >
      👈BACK
    </button>
    </Link>
      <div className="mx-auto max-w-7xl sm:px-6  lg:px-8">
        <div className="relative isolate overflow-hidden bg-white px-6 py-20 text-center sm:px-16 sm:shadow-sm">
          <p className="mx-auto max-w-1xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            ABU STORE
          </p>
          <p>Search Products instantly</p>
          
          <label
            className="mx-auto mt-8 relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
            htmlFor="search-bar"
          >
            <input
              type="text"
              id="search-input"
              placeholder="Enter search term"
              className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white"
              onKeyPress={handleKeyPress}
              required
            />
            <button
              onClick={handleSearch}
              className="w-full md:w-auto px-6 py-3 bg-black border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all"
            >
              <div className="flex items-center transition-all opacity-1">
                <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                  Search
                </span>
              </div>
            </button>
          </label>

          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle cx="512" cy="512" r="512" fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.7" />
          </svg>
        </div>
      </div>
      <div className="flex gap-8 flex-wrap m-20">
        {searchResults.length > 0 ? (
          searchResults.map((result, index) => (
            <div className="max-w-sm rounded overflow-hidden shadow-lg card" key={index}>
              <div className="px-6 py-4">
              <img src={result.image}></img>
              
                <div className="font-bold text-xl mb-2">{result.title}</div>
                <div className="font-bold text-xl mb-2"> &#x20B9; {result.price}</div>
                <p className="text-gray-500 text-base"></p>
                <span onClick={() => addToCart(result)} className="inline-block font-bold rounde text-center bg-black w-12 text-white mr-12 mb-2">
                  ADD
                </span>
              </div>
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </>
  );
};

export default SearchComponent;