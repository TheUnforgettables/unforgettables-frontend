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

const Potluck = ({ potluck }) => {
  return (
    <div className="potluck-body">
      <h1>Potluck Recipes</h1>
      <div className="flex-potluck">
        {potluck?.map((potluck, index) => {
          return (
            <Card key={index} className="potluck-card">
              <CardImg
                top
                width="100%"
                src={potluck.image}
                alt=""
                className="potluck-picture"
              />
              <CardBody>
                <div className="potluck-text">
                  <CardTitle>{potluck.recipe_name}</CardTitle>
                  <CardSubtitle>{potluck.description}</CardSubtitle>
                </div>
                <NavLink to={`/recipedetails/${potluck.id}`} className="nav-link">
                  <div role="button">
                    <Button className="potluck-button">Recipe Details</Button>
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
