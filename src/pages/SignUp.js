import React, { useRef } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { Button, Form, FormGroup, Label, Input } from "reactstrap"

const SignUp = ({ signUp }) => {
  const formRef = useRef()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    const data = Object.fromEntries(formData)
    const userInfo = {
      user: {
        email: data.email,
        password: data.password,
        password_confirmation: data.password_confirmation,
      },
    }
    signUp(userInfo)
    navigate("/login")
    e.target.reset()
  }

  return (
    <div className="recipe-card">
      <h1 className="recipe-card-title">Sign Up</h1>
      <Form className="form" innerRef={formRef} onSubmit={handleSubmit}>
        <FormGroup className="form-group">
          <Label for="email">Email:</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            required
          />
        </FormGroup>
        <FormGroup className="form-group">
          <Label for="password">Password:</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            required
          />
        </FormGroup>
        <FormGroup className="form-group">
          <Label for="password_confirmation">Confirm Password:</Label>
          <Input
            type="password"
            name="password_confirmation"
            id="password_confirmation"
            placeholder="Confirm your password"
            required
          />
        </FormGroup>
        <div className="submit">
          <Button type="submit" className="new-button">
            Submit
          </Button>
        </div>
      </Form>
      <div className="links">
        Already registered?{" "}
        <NavLink to="/login">
          <u>Log In</u>
        </NavLink>{" "}
        here.
      </div>
    </div>
  );
};

export default SignUp;
