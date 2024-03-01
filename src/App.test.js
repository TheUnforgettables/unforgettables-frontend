import { render, screen } from "@testing-library/react"
import App from "./App"
import { BrowserRouter } from "react-router-dom"

describe("<App />", () => {
  it("renders a nav list", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )

    const list = screen.getByRole("list")
    expect(list).toBeInTheDocument()
  })
})
