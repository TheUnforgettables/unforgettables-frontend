import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import EditRecipe from "../pages/EditRecipe"
import mockUsers from "../mockUsers.js"
import mockRecipes from "../mockRecipes.js"

describe("<EditRecipe />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <EditRecipe currentUser={mockUsers[0]} recipe={mockRecipes[0]} updateRecipe={() => {}} />
      </BrowserRouter>
    )
  })

  it("renders a heading", () => {
    render(
      <BrowserRouter>
        <EditRecipe currentUser={mockUsers[0]} recipe={mockRecipes[0]} updateRecipe={() => {}} />
      </BrowserRouter>
    )

    screen.logTestingPlaygroundURL()
    const header = screen.getByRole("heading", {
      name: /edit recipe/i,
    })
    expect(header).toBeInTheDocument()
  })

  it("renders a form group with a submit button", () => {
    render(
      <BrowserRouter>
        <EditRecipe currentUser={mockUsers[0]} recipe={mockRecipes[0]} updateRecipe={() => {}} />
      </BrowserRouter>
    )

    const name = screen.getByLabelText(/recipe name/i)
    expect(name).toBeInTheDocument()

    const description = screen.getByLabelText(/description/i)
    expect(description).toBeInTheDocument()

    const ingredients = screen.getByLabelText(/ingredients/i)
    expect(ingredients).toBeInTheDocument()

    const submitButton = screen.getByText(/update/i)
    expect(submitButton).toHaveAttribute("type", "submit")
  })

  it("renders the recipe name and description as initial values", () => {
    render(
      <BrowserRouter>
        <EditRecipe currentUser={mockUsers[0]} recipe={mockRecipes[0]} updateRecipe={() => {}} />
      </BrowserRouter>
    )

    expect(screen.getByLabelText(/recipe name/i)).toHaveValue(mockRecipes[0].name)
    expect(screen.getByLabelText(/description/i)).toHaveValue(mockRecipes[0].description)
  })
})