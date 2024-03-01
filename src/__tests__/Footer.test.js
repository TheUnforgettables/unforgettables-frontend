import { BrowserRouter } from "react-router-dom"
import { render, screen } from "@testing-library/react"
import Footer from "../components/Footer"

describe("<Footer />", () => {
  it("renders company name", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )

    const footer = screen.getByText(/The Unforgettables, LLC/i)
    expect(footer).toBeInTheDocument()
  })

  it("renders comapny information", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )
    const footer = screen.getByText(/About us/i)
    expect(footer).toBeInTheDocument()
  })

  it("renders contact information", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )
    const footer = screen.getByText(/Contact us/i)
    expect(footer).toBeInTheDocument()
  })

  it("renders legal information", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )
    const footer = screen.getByText(/Legal/i)
    expect(footer).toBeInTheDocument()
  })

  it("renders privact informtaion", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )
    const footer = screen.getByText(/Privacy/i)
    expect(footer).toBeInTheDocument()
  })

  it("renders terms of use", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )
    const footer = screen.getByText(/Terms of Use/i)
    expect(footer).toBeInTheDocument()
  })

  it("renders connect with us", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )
    const footer = screen.getByText(/Connect with us/i)
    expect(footer).toBeInTheDocument()
  })

  it("renders socail media connections", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )
    const footer = screen.getByText(/Facebook/i)
    expect(footer).toBeInTheDocument()
  })

  it("renders socail media connections", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )
    const footer = screen.getByText(/Twitter/i)
    expect(footer).toBeInTheDocument()
  })

  it("renders socail media connections", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )
    const footer = screen.getByText(/Instagram/i)
    expect(footer).toBeInTheDocument()
  })
})
