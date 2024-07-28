"use client";

import { useEffect, useState } from 'react';
import { CartProvider } from '../CartContext';
import Carte from '../Component/Cart';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Ensure the code runs only on the client-side
    if (typeof window !== 'undefined') {
      // Fetch items from localStorage
      const items = JSON.parse(localStorage.getItem('cart')) || [];
      console.log('Retrieved cart items:', items); // Debugging log
      setCartItems(items);
    }
  }, []);
  
  console.log(cartItems);

  return (
    <CartProvider>
      <div className="container mx-auto p-4">
        <Carte />
      </div>
    </CartProvider>
  );
};

export default Cart;
