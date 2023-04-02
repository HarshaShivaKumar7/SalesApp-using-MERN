import React from "react";
import { Button, ListGroup } from "react-bootstrap";

const SubcategoryListItem = ({ subcategory, onDelete }) => {
  return (
    <ListGroup.Item>
      <h4>{subcategory.name}</h4>
      <p>{subcategory.description}</p>
      <Button variant="danger" onClick={() => onDelete(subcategory.id)}>
        Delete
      </Button>
    </ListGroup.Item>
  );
};

export default SubcategoryListItem;
