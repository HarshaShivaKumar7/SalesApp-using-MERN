import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import SubcategoryListItem from "./SubcategoryListItem";

const SubcategoryList = ({ subcategories, onDelete }) => {
  return (
    <ListGroup>
      {subcategories.map((subcategory) => (
        <SubcategoryListItem
          key={subcategory.id}
          subcategory={subcategory}
          onDelete={onDelete}
        />
      ))}
    </ListGroup>
  );
};

export default SubcategoryList;
