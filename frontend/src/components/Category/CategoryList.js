import React from "react";
import CategoryListItem from "./CategoryListItem";

const CategoryList = ({ categories, onDelete }) => {
  return (
    <ul className="list-group">
      {categories.map((category) => (
        <CategoryListItem
          key={category._id}
          category={category}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default CategoryList;
