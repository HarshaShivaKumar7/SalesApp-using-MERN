import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductListItem from '../components/Product/ProductListItem';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('/api/products');
        setProducts(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <div className="row">
        {products.map((product) => (
          <ProductListItem key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
