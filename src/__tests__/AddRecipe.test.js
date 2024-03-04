import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import AddRecipe from "../pages/AddRecipe"
import mockUsers from "../mockUsers"

describe("<AddRecipe />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <AddRecipe currentUser={mockUsers[0]} />
      </BrowserRouter>
    )
  })

  it("renders a heading", () => {
    render(
      <BrowserRouter>
        <AddRecipe currentUser={mockUsers[0]} />
      </BrowserRouter>
    )

    screen.logTestingPlaygroundURL()
    const header = screen.getByRole("heading", {
      name: /new recipe/i,
    })
    expect(header).toBeInTheDocument()
  })

  it("renders a form group with a submit button", () => {
    render(
      <BrowserRouter>
        <AddRecipe currentUser={mockUsers[0]} />
      </BrowserRouter>
    )
    const name = screen.getByText(/recipe name:/i)
    expect(name).toBeInTheDocument()

    const description = screen.getByText(/description:/i)
    expect(description).toBeInTheDocument()

    const ingredients = screen.getByText(/ingredients:/i)
    expect(ingredients).toBeInTheDocument()

    const submitButton = screen.getByText(/submit/i)
    expect(submitButton).toHaveAttribute("type", "button")
  })
})
