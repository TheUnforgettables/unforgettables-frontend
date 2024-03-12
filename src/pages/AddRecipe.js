import React, { useState } from "react"
import { Button, Form, FormGroup, Label, Input } from "reactstrap"
import Checkbox from "@mui/material/Checkbox"
import Done from "@mui/icons-material/Done"
import { useNavigate } from "react-router-dom"
import "../App.css"

const AddRecipe = ({ createRecipe, currentUser }) => {
  const navigate = useNavigate()
  const [myRecipe, setMyRecipe] = useState({
    user_id: currentUser?.id || "",
    recipe_name: "",
    description: "",
    ingredients: "",
    instructions: "",
    image: "",
    public: false,
  })
  console.log(myRecipe)
  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value
    setMyRecipe({ ...myRecipe, [e.target.name]: value })
  }

  const handleImageChange = (e) => {
    setMyRecipe({ ...myRecipe, image: e.target.files[0] })
  }

  const handleSubmit = () => {
    createRecipe(myRecipe)
    navigate("/Myrecipes")
  }

  return (
    <>
      {currentUser && (
        <div className="background-image">
          <div className="recipe-card">
            <h1 className="recipe-card-title">New Recipe</h1>
            <Form className="form">
              <FormGroup className="form-group">
                <Label for="recipe_name">Recipe Name:</Label>
                <Input
                  type="text"
                  name="recipe_name"
                  onChange={handleChange}
                  value={myRecipe.recipe_name}
                />
              </FormGroup>
              <FormGroup className="form-group">
                <Label for="description">Description:</Label>
                <Input
                  type="text"
                  name="description"
                  onChange={handleChange}
                  value={myRecipe.description}
                />
              </FormGroup>
              <FormGroup className="form-group">
                <Label for="ingredients">Ingredients:</Label>
                <Input
                  type="text"
                  name="ingredients"
                  onChange={handleChange}
                  value={myRecipe.ingredients}
                />
              </FormGroup>
              <FormGroup className="form-group">
                <Label for="instructions">Instructions:</Label>
                <Input
                  type="text"
                  name="instructions"
                  onChange={handleChange}
                  value={myRecipe.instructions}
                />
              </FormGroup>
              <FormGroup className="form-group">
                <Label for="image">Image:</Label>
                <Input
                  type="text"
                  name="image"
                  accept="image/*"
                  onChange={handleChange}
                  value={myRecipe.image}
                />
              </FormGroup>
              <FormGroup className="form-group checkbox">
                <Checkbox
                  checked={myRecipe.public}
                  onChange={handleChange}
                  name="public"
                  icon={<Done />}
                  color="primary"
                />
                <Label for="public">Public</Label>
              </FormGroup>
              <div className="submit">
                <Button onClick={handleSubmit} className="new-button">
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        </div>
      )}
    </>
  )
}

export default AddRecipe