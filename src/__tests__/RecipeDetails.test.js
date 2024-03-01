import { render, screen } from "@testing-library/react"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import mockRecipes from "../mockRecipes"
import RecipeDetails from "../pages/RecipeDetails"

describe("<RecipeDetails />", () => {
  it("renders one recipe", () => {
    const recipe = "1"
    render(
      <MemoryRouter initialEntries={[`/RecipeDetails/${recipe}`]}>
        <Routes>
          <Route
            path="/RecipeDetails/:id"
            element={<RecipeDetails recipes={mockRecipes} />}
          />
        </Routes>
      </MemoryRouter>
    )
    expect(screen.getByText(/Grilled Salmon with Asparagus/i)).toBeInTheDocument()
    expect(screen.getByText(/A delicious and healthy dish featuring grilled salmon fillets served with roasted asparagus./i)).toBeInTheDocument()
    expect(screen.getByText(/almon fillets, Asparagus, Olive oil, Lemon, Garlic, Salt, Black pepper/i)).toBeInTheDocument()
    expect(screen.getByText(/Preheat grill to medium-high heat. Brush salmon fillets and asparagus spears with olive oil. Season with minced garlic, salt, and black pepper. Grill salmon for 4-5 minutes per side until cooked through and asparagus for 8-10 minutes until tender and lightly charred. Serve hot with a squeeze of lemon juice./i)).toBeInTheDocument()
  })
})