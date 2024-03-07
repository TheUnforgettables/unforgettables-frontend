import React from "react"
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap"
import { NavLink } from "react-router-dom"

const RecipeProtectedIndex = ({ recipes, currentUser }) => {
  const myRecipes = recipes?.filter(
    (recipe) => recipe.user_id === currentUser.id
  )

  return (
    <div className="Recipes-body">
      <h3>My Recipes:</h3>
      <div className="flex-recipes">
        {myRecipes?.map((recipe, index) => {
          return (
            <Card key={index} className="recipe-cards">
              <CardImg
                top
                width="100%"
                src={recipe.image}
                alt=""
                className="recipe-picture"
              />
              <CardBody>
                <div className="recipe-text">
                  <CardTitle>
                    <b>{recipe.recipe_name}</b>
                  </CardTitle>
                  <CardSubtitle>
                    {recipe.ingredients} Ingredients {recipe.instructions},
                    Instructions
                  </CardSubtitle>
                </div>
                <NavLink
                  to={`/RecipeDetails/${recipe.id}`}
                  className="nav-link"
                >
                  <Button className="recipe-button">More Details</Button>
                </NavLink>
                <NavLink to={`/editrecipe/${recipe.id}`} className="nav-link">
                  <Button className="recipe-button">edit</Button>
                </NavLink>
              </CardBody>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

export default RecipeProtectedIndex
