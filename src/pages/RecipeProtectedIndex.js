import React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardCover from "@mui/joy/CardCover";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import { NavLink } from "react-router-dom";
import { CardBody, CardTitle, CardSubtitle } from "reactstrap";

const RecipeProtectedIndex = ({ recipes, deleteRecipe, currentUser }) => {
  const myRecipes = recipes?.filter(
    (recipe) => recipe.user_id === currentUser.id
  );

  return (
    <div className="potluck-body">
      <Typography level="h1" className="heading">
        My Recipes
      </Typography>
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
                  <Typography level="h3">{recipe.recipe_name}</Typography>
                  <Typography level="body-md">{recipe.description}</Typography>
                </div>
                <div className="button-container">
                  <NavLink
                    to={`/recipedetails/${recipe.id}`}
                    className="nav-link"
                  >
                    <div role="button" className="button-wrapper">
                      <Button color="neutral" variant="solid">
                        More Details
                      </Button>
                    </div>
                  </NavLink>
                  <NavLink to={`/editrecipe/${recipe.id}`} className="nav-link">
                    <div role="button" className="button-wrapper">
                      <Button color="neutral" variant="solid">
                        Edit
                      </Button>
                    </div>
                  </NavLink>
                  <div role="button" className="button-wrapper">
                    <Button
                      color="neutral"
                      variant="solid"
                      onClick={() => deleteRecipe(recipe.id)}
                    >
                      Delete Recipe
                    </Button>
                  </div>
                </div>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default RecipeProtectedIndex
