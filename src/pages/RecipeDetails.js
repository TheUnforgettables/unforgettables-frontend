import React from "react"
import { useParams, NavLink } from "react-router-dom"
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap"


const RecipeDetails = ({ recipeDetails}) => {
  const { id } = useParams()
  const currentRecipe = recipeDetails.find((recipe) => recipe.id === +id)

  if (!RecipeDetails) {
    return <>Recipe not found!</>
  }

  return (
    <div className="recipe-details-body">
      {currentRecipe && (
        <Card className="flex-recipe-details">
          {/* Where picture goes */}
          <CardImg top width="100%" src={currentRecipe?.image} alt="" />
          {/* Changes text font */}
          <CardBody className="recipe-details-text">
            {/* Shows recipe info */}
            <div className="grid-row">
              <div className="recipe-details-text">
                <CardTitle>
                  <b>{currentRecipe?.recipe_name}</b>
                </CardTitle>
                <CardSubtitle>
                  {currentRecipe?.description}, 
                  {currentRecipe?.ingredients},
                  {currentRecipe?.instructions}
                </CardSubtitle>
              </div>
            </div>
            {/* Button takes back to potluck */}
            <NavLink to={`/potluck`} className="nav-link">
              <Button className="potluck-button">Back to the Potluck</Button>
            </NavLink>
          </CardBody>
        </Card>
      )}
    </div>
  )
}

export default RecipeDetails