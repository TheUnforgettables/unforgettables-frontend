import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import SignUp from "../pages/SignUp"
import "@testing-library/jest-dom"

describe("<SignUp />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    )
  })

  it("renders a sign up form", () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    )
    const signUp = screen.getByText(/email: password: confirm password:/i)
    expect(signUp).toBeInTheDocument()
  })

  it("renders a button with submit", () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    )
    const submitButton = screen.getByRole("button", {
      name: /submit/i,
    })
    expect(submitButton).toBeInTheDocument()
  })

  it("renders an alternate to log in", () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    )

    const linkLogIn = screen.getByRole("link", {
      name: /log in/i,
    })
    expect(linkLogIn).toBeInTheDocument()

    const alternateLink = screen.getByText(/already registered\? here\./i)
    expect(alternateLink).toBeInTheDocument()
  })
})
