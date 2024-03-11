import React from "react"
import { useParams } from "react-router-dom"
import Card from "@mui/joy/Card"
import CardContent from "@mui/joy/CardContent"
import CardOverflow from "@mui/joy/CardOverflow"
import Typography from "@mui/joy/Typography"
import AspectRatio from "@mui/joy/AspectRatio"
import Button from "@mui/joy/Button"
import { NavLink } from "react-router-dom"
import "../App.css"

const RecipeDetails = ({ recipeDetails = [] }) => {
  let { id } = useParams()
  const currentRecipe = recipeDetails.find((recipe) => recipe.id === +id)

  if (!currentRecipe) {
    return <>Recipe not found!</>
  }

  return (
    <div className="background-image">
      <div className="flex-recipe-details">
        <Typography level="h1" className="heading">
          Recipe Details
        </Typography>
        {currentRecipe && (
          <Card variant="outlined" sx={{ width: 600 }} className="recipe-card">
            <CardOverflow>
              <AspectRatio>
                <img
                  top="true"
                  width="100%"
                  src={currentRecipe.image}
                  srcSet={currentRecipe.image}
                  alt=""
                  className="recipe-picture"
                />
              </AspectRatio>
            </CardOverflow>
            <CardContent>
              <div className="recipe-text">
                <Typography level="h3">{currentRecipe.recipe_name}</Typography>
                <div className="label">
                  <Typography level="title-md">Description:</Typography>
                  <Typography level="body-md">
                    {currentRecipe.description}
                  </Typography>
                </div>
                <div className="label">
                  <Typography level="title-md">Ingredients:</Typography>
                  <Typography level="body-md">
                    {currentRecipe.ingredients}
                  </Typography>
                </div>
                <div className="label">
                  <Typography level="title-md">Instructions:</Typography>
                  <Typography level="body-md">
                    {currentRecipe.instructions}
                  </Typography>
                </div>
              </div>
              <NavLink to={`/potluck`} className="nav-link">
                <Button color="neutral" variant="solid">
                  Back to the Potluck
                </Button>
              </NavLink>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

export default RecipeDetails
