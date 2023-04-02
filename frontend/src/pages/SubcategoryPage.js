import React from 'react';
import SubcategoryList from '../components/Subcategory/SubcategoryList';
import SubcategoryForm from '../components/Subcategory/SubcategoryForm';

const SubcategoryPage = () => {
  return (
    <div>
      <h1>Subcategory Page</h1>
      <SubcategoryForm />
      <SubcategoryList />
    </div>
  );
};

export default SubcategoryPage;
