import React, { useState } from "react"
import { Button, Form, FormGroup, Label, Input } from "reactstrap"
import { useParams } from "react-router-dom"

const EditRecipe = ({ currentUser, recipes, updateRecipe }) => {
  const { id } = useParams()
  const recipe = recipes.find((item) => item.id === parseInt(id, 10))

  const [recipeFormData, setRecipeFormData] = useState({
    user_id: currentUser?.id,
    recipe_name: recipe?.recipe_name || "",
    description: recipe?.description || "",
    ingredients: recipe?.ingredients || "",
    instructions: recipe?.instructions || "",
    image: recipe?.image || "",
    public: recipe?.public || "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    updateRecipe(recipeFormData, recipe.id)
  }

  return (
    <div>
      <h1>Edit Recipe</h1>
      <Form>
        <FormGroup>
          <Label for="recipeName">Recipe Name:</Label>
          <Input
            type="text"
            id="recipeName"
            name="recipeName"
            value={recipeFormData.recipe_name}
            onChange={(e) =>
              setRecipeFormData({
                ...recipeFormData,
                recipe_name: e.target.value,
              })
            }
          />
        </FormGroup>

        <FormGroup>
          <Label for="recipeDescription">Description:</Label>
          <Input
            type="text"
            id="recipeDescription"
            name="recipeDescription"
            value={recipeFormData.description}
            onChange={(e) =>
              setRecipeFormData({
                ...recipeFormData,
                description: e.target.value,
              })
            }
          />
        </FormGroup>

        <FormGroup>
          <Label for="recipeIngredients">Ingredients:</Label>
          <Input
            type="text"
            id="recipeIngredients"
            name="recipeIngredients"
            value={recipeFormData.ingredients}
            onChange={(e) =>
              setRecipeFormData({
                ...recipeFormData,
                ingredients: e.target.value,
              })
            }
          />
        </FormGroup>

        <FormGroup>
          <Label for="recipeInstructions">Instructions:</Label>
          <Input
            type="textarea"
            id="recipeInstructions"
            name="recipeInstructions"
            value={recipeFormData.instructions}
            onChange={(e) =>
              setRecipeFormData({
                ...recipeFormData,
                instructions: e.target.value,
              })
            }
          />
        </FormGroup>

        <FormGroup>
          <Label for="recipeInstructions">Image:</Label>
          <Input
            type="textarea"
            id="recipeInstructions"
            name="recipeInstructions"
            value={recipeFormData.image}
            onChange={(e) =>
              setRecipeFormData({
                ...recipeFormData,
                image: e.target.value,
              })
            }
          />
        </FormGroup>

        <Button onClick={handleSubmit}>Update</Button>
      </Form>
    </div>
  )
}

export default EditRecipe
