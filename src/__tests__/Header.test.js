import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"
import Header from "../components/Header"
import logoUF from "../assets/logoUF.jpeg"

describe("<Header />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
  })
})

it("has clickable menu", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )
  screen.logTestingPlaygroundURL()

  const button = screen.getByRole("button", {
    name: /menu/i,
  })
  expect(button).toBeInTheDocument()
})

it("render a nav bar banner", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )
  const navBanner = screen.getByRole("banner")
  expect(navBanner).toBeInTheDocument()
})

it("renders a logo", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )
  const logoImage = screen.getByRole("img", {
    name: /company logo/i,
  })
  expect(logoImage).toHaveAttribute("src", logoUF)
})

it("has clickable links", () => {
  const { getByText } = render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )
  //Tests menu bar, and nested links within
  userEvent.click(getByText("Menu"))
  screen.getByText("Home")
  expect(getByText("Home").href).toEqual("http://localhost/")

  screen.getByText("Log In")
  expect(getByText("Log In").href).toEqual("http://localhost/LogIn")

  screen.getByText("Cookbook")
  expect(getByText("Cookbook").href).toEqual("http://localhost/Cookbook")

  screen.getByText("Community")
  expect(getByText("Community").href).toEqual("http://localhost/Potluck")
})
