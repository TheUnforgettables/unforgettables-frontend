import React from "react"
import Card from "@mui/joy/Card"
import CardOverflow from "@mui/joy/CardOverflow"
import Typography from "@mui/joy/Typography"
import AspectRatio from "@mui/joy/AspectRatio"
import Button from "@mui/joy/Button"
import { NavLink } from "react-router-dom"
import { CardBody } from "reactstrap"
import { red } from "@mui/material/colors"

const RecipeProtectedIndex = ({ recipes, deleteRecipe, currentUser }) => {
  const myRecipes = recipes?.filter(
    (recipe) => recipe.user_id === currentUser.id
  )

  return (
    <div className="potluck-body">
      <div className="background-image">
        <h1 className="heading"style={{ color: "white" }}>
          My Cookbook
        </h1>
        <div className="flex-potluck">
          {myRecipes?.map((recipe, index) => {
            return (
              <Card
                variant="outlined"
                sx={{ width: 320 }}
                key={index}
                className="potluck-card"
              >
                <CardOverflow>
                  <AspectRatio ratio={16 / 9}>
                    <img
                      top="true"
                      width="100%"
                      src={recipe.image}
                      alt=""
                      className="potluck-picture"
                    />
                  </AspectRatio>
                </CardOverflow>
                <CardBody>
                  <div className="potluck-text">
                    <Typography level="h3" style={{ fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif' }}>{recipe.recipe_name}</Typography>
                    <Typography level="body-lg" style={{ fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif' }}>{recipe.description}</Typography>
                  </div>
                  <div className="button-container">
                    <NavLink
                      to={`/recipedetails/${recipe.id}`}
                      className="nav-link"
                    >
                      <div role="button" className="button-wrapper">
                        <Button color="neutral" variant="solid" style={{ fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif' }}>
                          Details
                        </Button>
                      </div>
                    </NavLink>
                    <NavLink to={`/editrecipe/${recipe.id}`} className="nav-link">
                      <div role="button" className="button-wrapper">
                        <Button color="neutral" variant="solid" style={{ fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif' }}>
                          Edit
                        </Button>
                      </div>
                    </NavLink>
                      <div role="button" className="button-wrapper">
                      <Button
                        color="neutral"
                        variant="solid"
                        style={{ fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif', color: red[500] }}
                        onClick={() => deleteRecipe(recipe.id)}>
                        Delete
                      </Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default RecipeProtectedIndex
