import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"
import Potluck from "../pages/Potluck"

describe("<Potluck/>", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <Potluck />
      </BrowserRouter>
    )
  })

  it("renders with a heading", () => {
    render(
      <BrowserRouter>
        <Potluck />
      </BrowserRouter>
    )
    const heading = screen.getByRole("heading")
    expect(heading).toBeInTheDocument()
  })

  it("renders with text", () => {
    render(
      <BrowserRouter>
        <Potluck />
      </BrowserRouter>
    )
    const text = screen.getByText(/Potluck Recipes/i)
    expect(text).toBeInTheDocument()
  })
})