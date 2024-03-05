import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import LogIn from "../pages/LogIn"
import "@testing-library/jest-dom"

describe("<LogIn />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <LogIn logIn={LogIn} />
      </BrowserRouter>
    )
  })

  it("renders a log in  form with email and password fields", () => {
    render(
      <BrowserRouter>
        <LogIn logIn={LogIn} />
      </BrowserRouter>
    )

    const header = screen.getByRole("heading", {
      name: /log in/i,
    })
    expect(header).toBeInTheDocument()

    const emailField = screen.getByText(/email:/i)
    expect(emailField).toBeInTheDocument()

    const password = screen.getByText(/password/i)
    expect(password).toBeInTheDocument()
  })

  it("renders a button with submit text", () => {
    render(
      <BrowserRouter>
        <LogIn logIn={LogIn} />
      </BrowserRouter>
    )

    const button = screen.getByRole("button", {
      name: /sign in/i,
    })
    expect(button).toBeInTheDocument()
  })

  it("renders an alternate route to sign up", () => {
    render(
      <BrowserRouter>
        <LogIn logIn={LogIn} />
      </BrowserRouter>
    )

    const unRegistered = screen.getByText(/not registered yet\?/i)
    expect(unRegistered).toBeInTheDocument()

    const signUp = screen.getByText(/sign up/i)
    expect(signUp).toBeInTheDocument()
  })
})
