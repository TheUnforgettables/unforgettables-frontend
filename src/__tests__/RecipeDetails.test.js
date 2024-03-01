import { render, screen } from "@testing-library/react"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import mockRecipes from "../mockRecipes"
import RecipeDetails from "../pages/RecipeDetails"

describe("<RecipeDetails />", () => {
  it("renders one recipe", () => {
    let recipe = 1
    render(
      <MemoryRouter initialEntries={[`/recipedetails/${recipe}`]}>
        <Routes>
          <Route
            path="/recipedetails/:id"
            element={<RecipeDetails recipeDetails={mockRecipes} />}
          />
        </Routes>
      </MemoryRouter>
    )
    screen.logTestingPlaygroundURL()

    expect(
      screen.getByText(/Grilled Salmon with Asparagus/i)
    ).toBeInTheDocument()
  })
})
