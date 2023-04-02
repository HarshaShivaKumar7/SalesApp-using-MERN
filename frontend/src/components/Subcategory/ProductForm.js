import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios';

const ProductForm = ({ categories, subcategories, product, mode, handleProductSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    categoryId: '',
    subcategoryId: ''
  });

  const history = useHistory();

  useEffect(() => {
    if (product && mode === 'edit') {
      setFormData({
        name: product.name,
        description: product.description,
        price: product.price,
        categoryId: product.categoryId,
        subcategoryId: product.subcategoryId
      });
    }
  }, [product, mode]);

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (mode === 'add') {
        await axios.post('/api/products', formData);
      } else {
        await axios.put(`/api/products/${product._id}`, formData);
      }
      handleProductSubmit();
      history.push('/products');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input type="text" name="name" id="name" placeholder="Enter name" value={formData.name} onChange={handleInputChange} />
      </FormGroup>
      <FormGroup>
        <Label for="description">Description</Label>
        <Input type="textarea" name="description" id="description" placeholder="Enter description" value={formData.description} onChange={handleInputChange} />
      </FormGroup>
      <FormGroup>
        <Label for="price">Price</Label>
        <Input type="number" name="price" id="price" placeholder="Enter price" value={formData.price} onChange={handleInputChange} />
      </FormGroup>
      <FormGroup>
        <Label for="category">Category</Label>
        <Input type="select" name="categoryId" id="category" value={formData.categoryId} onChange={handleInputChange}>
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="subcategory">Subcategory</Label>
        <Input type="select" name="subcategoryId" id="subcategory" value={formData.subcategoryId} onChange={handleInputChange}>
          <option value="">Select a subcategory</option>
          {subcategories.map((subcategory) => (
            <option key={subcategory._id} value={subcategory._id}>
              {subcategory.name}
            </option>
          ))}
        </Input>
      </FormGroup>
      <Button color="primary">{mode === 'add' ? 'Add Product' : 'Update Product'}</Button>
    </Form>
  );
};

export default ProductForm;
