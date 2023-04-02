import React from 'react';
import ProductListItem from './ProductListItem';

const ProductList = ({ products }) => {
  return (
    <div>
      <h2>Products</h2>
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        products.map((product) => (
          <ProductListItem key={product.id} product={product} />
        ))
      )}
    </div>
  );
};

export default ProductList;
