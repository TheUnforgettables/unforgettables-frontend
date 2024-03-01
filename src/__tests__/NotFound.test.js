import React from "react"
import { screen, render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import NotFound from "../pages/NotFound"
import userEvent from "@testing-library/user-event"
import Header from "../components/Header"

describe("<NotFound />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    )
  })

  it("renders a not found image", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    )
    screen.logTestingPlaygroundURL()
    const image = screen.getByRole("img")
    expect(image).toBeInTheDocument()
  })

  it("renders a role attribute", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    )

    const attribute = screen.getByRole("img", {
      name: /404 not found/i,
    })
    expect(attribute).toHaveAttribute("src")
  })
})