import React from "react"
import { useRef } from "react"
import { useNavigate, NavLink } from "react-router-dom"

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
    <div className="auth-body">
      <h2 className="header">Log In</h2>
      <form className="form-div" ref={formRef} onSubmit={handleSubmit}>
        <label>
          Email:{" "}
          <input
            className="field auth-flex"
            type="email"
            name="email"
            placeholder="email"
            required
          />
        </label>
        <br />
        <label>
          Password:{" "}
          <input
            className="field auth-flex"
            type="password"
            name="password"
            placeholder="password"
            required
          />
        </label>
        <br />
        <input className="actions" type="submit" value="Sign In" />
        <div className="links">
          Not registered yet?{" "}
          <NavLink to="/signup">
            <u>Sign Up</u>
          </NavLink>
        </div>
      </form>
    </div>
  )
}

export default LogIn
