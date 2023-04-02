import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Input from "../common/Input";

const SubcategoryForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ name, description });
    setName("");
    setDescription("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        label="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <Input
        label="Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default SubcategoryForm;
