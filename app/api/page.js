// components/ProductForm.js
"use client"
import { useState } from 'react';

const ProductForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    productName: '',
    price: '',
    description: '',
    category: '',
    imgLink: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/Ecom', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Product added successfully');
        setFormData({
          name: '',
          productName: '',
          price: '',
          description: '',
          category: '',
          imgLink: '',
        });
      } else {
        alert('Failed to add product');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to add product');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Product Name:
          <input
            type="text"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Category:
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select a category</option>
            <option value="Speakers">Speakers</option>
            <option value="Mobile Phones">Mobile Phones</option>
            <option value="Earphones">Earphones</option>
            <option value="Charger">Charger</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Image Link:
          <input
            type="text"
            name="imgLink"
            value={formData.imgLink}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
