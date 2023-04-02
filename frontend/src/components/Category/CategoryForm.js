import React, { useState } from "react";
import Button from "../common/Button";
import Input from "../common/Input";

const CategoryForm = ({ onSubmit }) => {
  const [category, setCategory] = useState({ name: "", description: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(category);
    setCategory({ name: "", description: "" });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCategory((prevCategory) => ({ ...prevCategory, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="name"
        label="Name"
        value={category.name}
        onChange={handleInputChange}
      />
      <Input
        name="description"
        label="Description"
        value={category.description}
        onChange={handleInputChange}
      />
      <Button type="submit" className="btn-primary">
        Submit
      </Button>
    </form>
  );
};

export default CategoryForm;
