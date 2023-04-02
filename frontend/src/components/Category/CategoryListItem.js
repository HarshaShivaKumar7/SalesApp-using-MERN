import React from "react";
import Button from "../common/Button";

const CategoryListItem = ({ category, onDelete }) => {
  return (
    <li className="list-group-item">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h5>{category.name}</h5>
          <p>{category.description}</p>
        </div>
        <div>
          <Button className="btn-danger" onClick={() => onDelete(category._id)}>
            Delete
          </Button>
        </div>
      </div>
    </li>
  );
};

export default CategoryListItem;
