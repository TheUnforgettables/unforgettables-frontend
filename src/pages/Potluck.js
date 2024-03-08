import React from "react"
import Card from "@mui/joy/Card"
import CardContent from "@mui/joy/CardContent"
import CardCover from "@mui/joy/CardCover"
import CardOverflow from "@mui/joy/CardOverflow"
import Divider from "@mui/joy/Divider"
import Typography from "@mui/joy/Typography"
import AspectRatio from "@mui/joy/AspectRatio"
import Button from "@mui/joy/Button"
import { CardBody, CardTitle, CardSubtitle } from "reactstrap"
import { NavLink } from "react-router-dom"

const Potluck = ({ potluck }) => {
  return (
    <div className="potluck-body">
      <Typography level="h1" className="heading">
        Potluck Recipes
      </Typography>
      <div className="flex-potluck">
        {potluck?.map((potluck, index) => {
          return (
            <Card
              variant="outlined"
              sx={{ width: 320 }}
              key={index}
              className="potluck-card"
            >
              <CardOverflow>
                <AspectRatio>
                  <img
                    top="true"
                    width="100%"
                    src={potluck.image}
                    alt=""
                    className="potluck-picture"
                  />
                </AspectRatio>
              </CardOverflow>
              <CardBody>
                <div className="potluck-text">
                  <Typography level="h4">{potluck.recipe_name}</Typography>
                  <Typography level="body-md">{potluck.description}</Typography>
                </div>
                <NavLink
                  to={`/recipedetails/${potluck.id}`}
                  className="nav-link"
                >
                  <div role="button">
                    <Button color="neutral" variant="solid">
                      Recipe Details
                    </Button>
                  </div>
                </NavLink>
              </CardBody>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

export default Potluck
