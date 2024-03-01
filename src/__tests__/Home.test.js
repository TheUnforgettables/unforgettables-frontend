import { render, screen } from "@testing-library/react"
import Home from "../pages/Home"
import { BrowserRouter } from "react-router-dom"
import Video from "../assets/video.mp4"

describe("<Home />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
  })

  it("renders a video", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )

    const testVideo = screen.getByRole("video")
    expect(testVideo).toHaveAttribute("src", Video)
  })

  it("it renders  a heading", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )

    const heading = screen.getByRole("heading", {
      name: /Welcome to Unforgettable: the ultimate digital heirloom for your family's culinary journey. Celebrate the flavors, stories, and memories that make your family's kitchen truly special with Unforgettable. Start building your delicious legacy today!/i,
    })
    expect(heading).toBeInTheDocument()
  })
})