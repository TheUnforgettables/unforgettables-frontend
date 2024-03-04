import { render, screen } from "@testing-library/react"
import RecipeProtectedIndex from "../pages/RecipeProtectedIndex"
import { BrowserRouter } from "react-router-dom"

describe("<RecipeProtectedIndex />", () => {
  beforeEach(() => {
    const currentUser = {
      id: 1,
      email: "test1@example.com",
    }

    const userRecipes = [
      {
        id: 1,
        recipe_name: "Grilled Salmon with Asparagus",
        description:
          "A delicious and healthy dish featuring grilled salmon fillets served with roasted asparagus.",
        ingredients:
          "Salmon fillets, Asparagus, Olive oil, Lemon, Garlic, Salt, Black pepper",
        instructions:
          "Preheat grill to medium-high heat. Brush salmon fillets and asparagus spears with olive oil. Season with minced garlic, salt, and black pepper. Grill salmon for 4-5 minutes per side until cooked through and asparagus for 8-10 minutes until tender and lightly charred. Serve hot with a squeeze of lemon juice.",
        public: true,
        user_id: 1,
      },
    ]

    render(
      <BrowserRouter>
        <RecipeProtectedIndex
          Recipes={userRecipes}
          currentUser={currentUser}
        />
      </BrowserRouter>
    )
  })

  it("renders without crashing", () => {
    const element = screen.getByText("My Recipes")
    expect(element).toBeInTheDocument()
  })

  it("renders a button", () => {
    render(
      <BrowserRouter>
        <RecipeProtectedIndex />
      </BrowserRouter>
    )
    const heading = screen.getByRole('heading', { name: /my recipes:/i })
    expect(
      heading
    ).toBeInTheDocument()
  })
})