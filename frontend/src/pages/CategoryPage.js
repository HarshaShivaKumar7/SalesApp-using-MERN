import React from 'react';
import CategoryList from '../components/Category/CategoryList';
import CategoryForm from '../components/Category/CategoryForm';

const CategoryPage = () => {
  return (
    <div>
      <h1>Category Page</h1>
      <CategoryForm />
      <CategoryList />
    </div>
  );
};

export default CategoryPage;
