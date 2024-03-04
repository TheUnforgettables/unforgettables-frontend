import React, { useState } from "react"
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { useNavigate } from "react-router-dom"

const AddRecipe = ({createRecipe, currentUser}) => {
  const navigate = useNavigate()
  cosnt [myRecipe, SetMyRecipe] = useState ({
    recipe_name: "",
    description: "", 
    ingredients: "",
    public: "", 
    user_id: currentUser.id
  })

  const handleChange = (e) => {
    SetMyRecipe({...myRecipe,  [e.target.name]: e.target.value})
  }

  const handleSubmit = () => {
    createRecipe(myRecipe)
    navigate("/cookbook")
  }
  
  return (
    <>
    {currentUser?.id && (
      <div className="cookbook-body">
        <h1>New Recipe</h1>
        <Form className="form">
          <FormGroup className="form-group recipe name">
            <Label for="recipe_name">Recipe Name: </Label>
            <Input type="text" name="recipe_name" onChange={handleChange} value={myRecipe.recipe_name} /> 
            </FormGroup>
          <FormGroup className="form-group group description">
            <Label for="description">Description: </Label>
            <Input type="text" name="description" onChange={handleChange} value={myRecipe.description} /> 
          </FormGroup>
          <FormGroup className="form-group group ingredients">
            <Label for="ingredients">Ingredients: </Label>
            <Input type="text" name="ingredients" onChange={handleChange} value={myRecipe.ingredients} /> 
          </FormGroup>
          <FormGroup className="form-group image">
            <Label for="image">Image URL: </Label>
            <Input type="text" name="image" onChange={handleChange} value={myRecipe.image} />
          </FormGroup>
          <div className="submit">
            <Button onClick={handleSubmit} className="new-button">Submit</Button>
          </div>
        </Form>
      </div>
    )}
    </>
  )
}

export default AddRecipe