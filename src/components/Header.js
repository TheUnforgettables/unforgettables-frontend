import React from "react"
import Menu from "@mui/joy/Menu"
import MenuButton from "@mui/joy/MenuButton"
import MenuItem from "@mui/joy/MenuItem"
import Dropdown from "@mui/joy/Dropdown"
import Link from "@mui/joy/Link"
import { useNavigate } from "react-router-dom"

const Header = ({ currentUser, logout }) => {
  const navigate = useNavigate()
  const handleClick = () => {
    logout()
    navigate("/")
  }

  return (
    <header className="header">
      <Dropdown>
        <MenuButton
          sx={{
            border: "none",
            backgroundColor: "transparent",
            color: "grey",
            fontWeight: 700,
            opacity: "100%", 
            fontSize: "35px",
            fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
            '&:hover': { 
              backgroundColor: "transparent", color: "red"}
          }}
          className="menu-button"
        >
          {" "}
          Menu
        </MenuButton>
        <Menu className="menu">
          <MenuItem className="menu-item">
            <Link href="/" className="link">
              Home
            </Link>
          </MenuItem>

          <MenuItem className="menu-item">
            <Link href="/Potluck" className="link">
              Potluck
            </Link>
          </MenuItem>
          {currentUser && (
            <>
              <MenuItem className="menu-item">
                <Link href="/Myrecipes" className="link">
                  My Cookbook
                </Link>
              </MenuItem>
              <MenuItem className="menu-item">
                <Link href="/Addrecipe" className="link">
                  Add Recipe
                </Link>
              </MenuItem>
              <MenuItem className="menu-item">
                <Link onClick={handleClick} className="link">
                  Log out
                </Link>
              </MenuItem>
            </>
          )}

          {!currentUser && (
            <>
              <MenuItem className="menu-item">
                <Link href="/LogIn" className="link">
                  Log In
                </Link>
              </MenuItem>

              <MenuItem className="menu-item">
                <Link href="/SignUp" className="link">
                  Sign Up
                </Link>
              </MenuItem>
            </>
          )}
        </Menu>
      </Dropdown>
    </header>
  )
}

export default Header
