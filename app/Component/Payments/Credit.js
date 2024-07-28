// components/CreditCardForm.js
import React from 'react';

const CreditCardForm = () => {
  return (
    <form className="max-w-md mx-auto">
      <input
        type="text"
        placeholder="Cardholder Name"
        className="w-full p-2 mb-4 rounded"
      />
      <input
        type="text"
        placeholder="Card Number"
        className="w-full p-2 mb-4 rounded"
      />
      <input
        type="text"
        placeholder="Expiration Date (MM/YY)"
        className="w-full p-2 mb-4 rounded"
      />
      <input
        type="text"
        placeholder="CVV"
        className="w-full p-2 mb-4 rounded"
      />
      <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
        Confirm Payment
      </button>
    </form>
  );
};

export default CreditCardForm;
