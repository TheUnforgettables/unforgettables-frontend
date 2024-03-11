import React from "react"
import Video from "../assets/video1.mp4"
import Sheet from "@mui/joy/Sheet"

import { Typography } from "@mui/material"

const Home = () => {
  return (
    <div>
      <video autoPlay loop muted playsInline id="video">
        <source src={Video} type="video/mp4" />
      </video>
      <div className="overlay">
        <Sheet
          className="card-holder"
          color="plain"
          variant="solid"
          style={{ top: "-160px" }}
        >
          <Typography level="h1" className="heading">
            <h1>Welcome to Unforgettable:</h1>
          </Typography>
          <Typography level="h2" className="heading">
            <h2>
              The ultimate digital heirloom for your family's culinary journey.
              Celebrate the flavors, stories, and memories that make your
              family's kitchen truly special with Unforgettable. Start building
              your delicious legacy today!
            </h2>
          </Typography>
        </Sheet>
      </div>
    </div>
  )
}

export default Home
