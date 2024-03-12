import React from "react"
import Card from "@mui/joy/Card"
import CardOverflow from "@mui/joy/CardOverflow"
import Typography from "@mui/joy/Typography"
import AspectRatio from "@mui/joy/AspectRatio"
import Button from "@mui/joy/Button"
import { CardBody } from "reactstrap"
import { NavLink } from "react-router-dom"

const Potluck = ({ potluck }) => {
  return (
    <div className="background-image">
      <div className="potluck-body">
        <h1 className="heading"style={{ color: "white" }}>
          Potluck Recipes
        </h1>
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
                    <Typography level="h3" style={{ fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif' }}>{potluck.recipe_name}</Typography>
                    <Typography level="body-lg" style={{ fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif' }}>{potluck.description}</Typography>
                  </div>
                  <div className="button-container">
                    <NavLink
                      to={`/recipedetails/${potluck.id}`}
                      className="nav-link"
                    >
                      <div role="button">
                        <Button color="neutral" variant="solid" style={{ fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif' }}>
                          Details
                        </Button>
                      </div>
                    </NavLink>
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

export default Potluck
