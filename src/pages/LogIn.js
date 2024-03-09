import React, { useRef } from "react"
import { useNavigate, NavLink } from "react-router-dom"
import { Button, Form, FormGroup, Label, Input } from "reactstrap"

const LogIn = ({ logIn }) => {
  const formRef = useRef()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    const data = Object.fromEntries(formData)
    const userInfo = {
      user: { email: data.email, password: data.password },
    }
    try {
      await logIn(userInfo)
      navigate("/potluck")
    } catch (error) {
      console.error(error)
    }
    e.target.reset()
  }

  return (
    <div className="recipe-card">
      <h1 className="recipe-card-title">Log In</h1>
      <Form className="form" innerRef={formRef} onSubmit={handleSubmit}>
        <FormGroup className="form-group">
          <Label for="email">Email:</Label>
          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </FormGroup>
        <FormGroup className="form-group">
          <Label for="password">Password:</Label>
          <Input
            type="password"
            name="password"
            placeholder="Enter your password"
            required
          />
        </FormGroup>
        <div className="submit">
          <Button type="submit" className="new-button">
            Sign In
          </Button>
        </div>
        <div className="links">
          Not registered yet?{" "}
          <NavLink to="/signup">
            <u>Sign Up</u>
          </NavLink>
        </div>
      </Form>
    </div>
  )
}

export default LogIn
