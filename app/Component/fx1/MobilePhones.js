"use client";
import { useEffect, useState, useContext } from 'react';
import { get, ref, limitToFirst, query, onValue } from "firebase/database";
import { database } from '../../firebase';
import { CartContext } from '../../CartContext';
import ProductModal from '../ProductModal';

export default function Mobiles() {
    const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);
  const [notification, setNotification] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addToCart, getCartTotals } = useContext(CartContext);

  const category = "Mobile_Phones"; 
  useEffect(() => {
    const dbRef = ref(database, '/Ecom');
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      const filteredData = data
        ? Object.keys(data)
            .map(key => ({ id: key, ...data[key] }))
            .filter(item => item.category === category)
        : [];
      setData(filteredData);
    });
  }, [category]);

  const handleAddToCart = (product) => {
    addToCart(product);
    setNotification(true);
    setTimeout(() => {
      setNotification(false);
    }, 2000);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div>
      {notification && (
        <div className="fixed top-0 left-0 right-0 mx-auto w-40 p-4 bg-green-500 text-white text-center z-50">
          Item added to cart! {getCartTotals()} items
        </div>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data.length > 0 ? (
        data.map(item => (
          <div key={item.id} className="bg-white rounded-lg shadow-md p-4 cursor-pointer" >
            <img src={item.imgLink} className="w-full h-40 object-contain mb-4 rounded-md" />
            <div className="flex flex-col">
              <span className="text-gray-700 text-sm">{item.name}</span>
              <span className="text-gray-900 text-lg font-semibold">&#x20b9;{item.price}</span>
              <div className="flex items-center mt-1">
                <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.964a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.373 2.454a1 1 0 00-.364 1.118l1.287 3.964c.3.921-.755 1.688-1.54 1.118l-3.373-2.454a1 1 0 00-1.175 0l-3.373 2.454c-.784.57-1.839-.197-1.54-1.118l1.287-3.964a1 1 0 00-.364-1.118L2.162 9.39c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.286-3.964z" />
                </svg>
                <span className="ml-1 text-gray-700">{products.rating}</span>
                <button onClick={() => addToCart(item)} className='px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700'>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
         ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
      {selectedProduct && (
        <ProductModal
        
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}
