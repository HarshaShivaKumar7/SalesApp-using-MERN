import React from 'react';
import ProductList from '../components/Product/ProductList';
import ProductForm from '../components/Product/ProductForm';

const ProductPage = () => {
  return (
    <div>
      <h1>Product Page</h1>
      <ProductForm />
      <ProductList />
    </div>
  );
};

export default ProductPage;
