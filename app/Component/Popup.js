// components/Popup.js
import React from 'react';

const Popup = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white border rounded shadow-lg p-4 w-80">
        <p className="text-center font-semibold">{message}</p>
        <button 
          onClick={onClose} 
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-400"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
