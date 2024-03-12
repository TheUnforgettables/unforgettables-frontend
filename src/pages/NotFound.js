import React from "react"
import notFoundImage from "../assets/notFoundImage.avif"
import "../App.css"

const NotFound = () => {
  return (
    <div className="not-found-container">
      <img
        src={notFoundImage}
        alt="404 not found"
        className="not-found-image"
      />
    </div>
  )
}

export default NotFound
