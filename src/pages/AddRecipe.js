import React, { useState } from "react"
import { Button, Form, FormGroup, Label, Input } from "reactstrap"
import Checkbox from "@mui/material/Checkbox"
import Done from "@mui/icons-material/Done"
import { useNavigate } from "react-router-dom"

const AddRecipe = ({ createRecipe, currentUser }) => {
  const navigate = useNavigate()
  const [myRecipe, setMyRecipe] = useState({
    user_id: currentUser?.id || "",
    recipe_name: "",
    description: "",
    ingredients: "",
    instructions: "",
    public: false,
  })
  console.log(myRecipe)
  console.log(currentUser)

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value
    setMyRecipe({ ...myRecipe, [e.target.name]: value })
  }

  const handleSubmit = () => {
    createRecipe(myRecipe)
    navigate("/Myrecipes")
  }

  return (
    <>
      {currentUser && (
        <div className="myrecipes-body">
          <h1>New Recipe</h1>
          <Form className="form">
            <FormGroup className="form-group recipe name">
              <Label for="recipe_name">Recipe Name: </Label>
              <Input
                type="text"
                name="recipe_name"
                onChange={handleChange}
                value={myRecipe.recipe_name}
              />
            </FormGroup>
            <FormGroup className="form-group group description">
              <Label for="description">Description: </Label>
              <Input
                type="text"
                name="description"
                onChange={handleChange}
                value={myRecipe.description}
              />
            </FormGroup>
            <FormGroup className="form-group group ingredients">
              <Label for="ingredients">Ingredients: </Label>
              <Input
                type="text"
                name="ingredients"
                onChange={handleChange}
                value={myRecipe.ingredients}
              />
            </FormGroup>
            <FormGroup className="form-group group instructions">
              <Label for="instructions">Instructions: </Label>
              <Input
                type="text"
                name="instructions"
                onChange={handleChange}
                value={myRecipe.instructions}
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
      )}
    </>
  )
}

export default AddRecipe
