import React from 'react';

const ProductListItem = ({ product }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
};

export default ProductListItem;
