// components/CheckoutForm.js
"use client";
import React, { useState } from 'react';
import { database } from '../../firebase'; // Ensure Firebase is initialized
import { ref, set } from 'firebase/database';
import { useRouter } from 'next/navigation';

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phoneNumber: '',
    paymentMethod: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    address: '',
    phoneNumber: '',
    paymentMethod: '',
  });

  const router = useRouter(); // Initialize router

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    // Address validation
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
      valid = false;
    }

    // Phone Number validation
    const phonePattern = /^[0-9]{10}$/;
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone Number is required';
      valid = false;
    } else if (!phonePattern.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Phone Number must be 10 digits';
      valid = false;
    }

    // Payment Method validation
    if (!formData.paymentMethod) {
      newErrors.paymentMethod = 'Payment method is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectMethod = (method) => {
    setFormData({
      ...formData,
      paymentMethod: method,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Save form data to localStorage
      localStorage.setItem('formData', JSON.stringify(formData));
      console.log('Form data saved to localStorage:', formData);
    }
  };

  const handleProceedToPayment = async () => {
    try {
      // Fetch cart items from localStorage
      const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      // Fetch form data from localStorage
      const formDataFromStorage = JSON.parse(localStorage.getItem('formData')) || {};
      
      // Create a unique ID for the order
      const orderId = Date.now().toString();

      // Create a reference in Firebase Realtime Database
      const orderRef = ref(database, `orders/${orderId}`);

      // Prepare data to be saved
      const orderData = {
        ...formDataFromStorage,
        cartItems,
        createdAt: new Date().toISOString(),
      };

      // Save data to Firebase Realtime Database
      await set(orderRef, orderData);

      console.log('Order data uploaded successfully:', orderData);

      // Optionally, clear localStorage
      localStorage.removeItem('cartItems');
      localStorage.removeItem('formData');
      
      // Redirect to the home page
      router.push('/'); 

    } catch (error) {
      console.error('Failed to upload order data:', error);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm ${errors.name ? 'border-red-500' : 'border-gray-300'} `}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        {/* Address Field */}
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            rows="3"
            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm ${errors.address ? 'border-red-500' : 'border-gray-300'} `}
          />
          {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
        </div>

        {/* Phone Number Field */}
        <div>
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} `}
          />
          {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
        </div>

        {/* Payment Method */}
        <div className="space-y-2">
          <h3 className="text-lg font-medium">Payment Method</h3>
          <div
            className={`p-4 border rounded-lg cursor-pointer ${formData.paymentMethod === 'COD' ? 'bg-blue-100 border-blue-500' : 'border-gray-300'} hover:bg-gray-100`}
            onClick={() => handleSelectMethod('COD')}
          >
            <input
              type="radio"
              id="cod"
              name="paymentMethod"
              value="COD"
              checked={formData.paymentMethod === 'COD'}
              readOnly
              className="mr-2"
            />
            <label htmlFor="cod" className="font-medium">Cash on Delivery (COD)</label>
          </div>
          {errors.paymentMethod && <p className="text-red-500 text-sm">{errors.paymentMethod}</p>}
        </div>

        {/* Submit Button */}
      
      </form>

      {/* Proceed to Payment Button */}
      <button
        onClick={handleProceedToPayment}
        className="w-full bg-green-600 text-white py-2 rounded-md mt-4 hover:bg-green-500"
      >
        Proceed to Payment
      </button>
    </div>
  );
};

export default CheckoutForm;
