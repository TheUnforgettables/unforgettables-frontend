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
        <MenuButton>Menu</MenuButton>
        <Menu>
          <MenuItem>
            <Link href="/">Home</Link>
          </MenuItem>

          <MenuItem>
            <Link href="/Potluck">Potluck</Link>
          </MenuItem>
          {currentUser && (
            <>
              <MenuItem>
                <Link href="/Myrecipes">My Cookbook</Link>
              </MenuItem>
              <MenuItem>
                <Link href="/Addrecipe">Add Recipe</Link>
              </MenuItem>
              <MenuItem>
                <Link onClick={handleClick}>Log out</Link>
              </MenuItem>
            </>
          )}

          {!currentUser && (
            <>
              <MenuItem>
                <Link href="/LogIn">Log In</Link>
              </MenuItem>

              <MenuItem>
                <Link href="/SignUp">Sign Up</Link>
              </MenuItem>
            </>
          )}
        </Menu>
      </Dropdown>
    </header>
  )
}

export default Header
