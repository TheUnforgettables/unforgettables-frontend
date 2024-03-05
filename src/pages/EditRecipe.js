import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useNavigate } from "react-router-dom";

const EditRecipe = ({ recipe, updateRecipe }) => {
  const [name, setName] = useState(recipe.recipe_name);
  const [description, setDescription] = useState(recipe.description);
  const [ingredients, setIngredients] = useState(Array.isArray(recipe.ingredients) ? recipe.ingredients.join(", ") : "");
  const [instructions, setInstructions] = useState(Array.isArray(recipe.instructions) ? recipe.instructions.join("\n") : "");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRecipe(recipe.id, { recipe_name: name, description, ingredients: ingredients.split(","), instructions: instructions.split("\n") });
    navigate(`/recipes/${recipe.id}`);
  };

  return (
    <div>
      <h1>Edit Recipe</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="recipeName">Recipe Name:</Label>
          <Input type="text" id="recipeName" name="recipeName" value={name} onChange={(e) => setName(e.target.value)} />
        </FormGroup>

        <FormGroup>
          <Label for="recipeDescription">Description:</Label>
          <Input type="text" id="recipeDescription" name="recipeDescription" value={description} onChange={(e) => setDescription(e.target.value)} />
        </FormGroup>

        <FormGroup>
          <Label for="recipeIngredients">Ingredients:</Label>
          <Input type="text" id="recipeIngredients" name="recipeIngredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
        </FormGroup>

        <FormGroup>
          <Label for="recipeInstructions">Instructions:</Label>
          <Input type="textarea" id="recipeInstructions" name="recipeInstructions" value={instructions} onChange={(e) => setInstructions(e.target.value)} />
        </FormGroup>

        <Button type="submit" color="primary">Update</Button>
      </Form>
    </div>
  );
};

export default EditRecipe
