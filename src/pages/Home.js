import React from "react"
import Video from "../assets/video1.mp4"

const Home = () => {
  return (
    <div>
      <video autoPlay loop muted playsInline id="video">
        <source src={Video} type="video/mp4" />
      </video>
      <div className="overlay">
        <h1 className="title">Welcome to Unforgettable: the ultimate digital heirloom for your family's culinary journey. Celebrate the flavors, stories, and memories that make your family's kitchen truly special with Unforgettable. Start building your delicious legacy today!
        </h1>
      </div>
   </div>
  )
}

export default Home
