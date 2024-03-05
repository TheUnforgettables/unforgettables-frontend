import { Routes, Route, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import "./App.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import About from "./pages/About"
import AddMember from "./pages/AddMember"
import AddRecipe from "./pages/AddRecipe"
import Cookbook from "./pages/Cookbook"
import EditRecipe from "./pages/EditRecipe"
import FamilyTree from "./pages/FamilyTree"
import Home from "./pages/Home"
import LogIn from "./pages/LogIn"
import NotFound from "./pages/NotFound"
import Potluck from "./pages/Potluck"
import RecipeDetails from "./pages/RecipeDetails"
import SignUp from "./pages/SignUp"
import mockUsers from "./mockUsers"
import mockRecipes from "./mockRecipes"
import RecipeProtectedIndex from "./pages/RecipeProtectedIndex"

const App = () => {
  const [currentUser, setCurrentUser] = useState(null)
  const [recipe, setRecipes] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user")
    if (loggedInUser) {
      setCurrentUser(JSON.parse(loggedInUser))
    }
  }, [])
  
  useEffect(() => {
    readRecipe()
  }, [])

  const logIn = (userInfo) => {
    fetch("http://localhost:3001/login", {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        localStorage.setItem("token", response.headers.get("Authorization"))
        return response.json()
      })
      .then((payload) => {
        setCurrentUser(payload)
      })
      .catch((error) => console.log("login errors: ", error))
  }

  const signUp = (userInfo) => {
    fetch("http://localhost:3001/signup", {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        localStorage.setItem("token", response.headers.get("Authorization"))
        return response.json()
      })
      .then((payload) => {
        localStorage.setItem("user", JSON.stringify(payload))
        setCurrentUser(payload)
      })
      .catch((error) => console.log("Sign up errors: ", error))
  }

  const logout = () => {
    fetch("http://localhost:3001/logout", {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      method: "DELETE",
    })
      .then((payload) => {
        localStorage.removeItem("token")
        localStorage.removeItem("user") 
        setCurrentUser(null)
      }).then(() =>{
        navigate( "/" )
      }) 
      .catch((error) => console.log("log out errors: ", error))
  }

  const createRecipe = () => {
    console.log(createRecipe)
  }

  const readRecipe = () => {
    fetch("http://localhost:3001/potluck")
    .then((response) => response.text())
    .then((payload) => setRecipes(payload))
    .then((error) => console.log(error))
  }

  console.log(readRecipe)
  const updateRecipe = () => {
    console.log(updateRecipe)
  }

  const deleteRecipe = () => {
    console.log(deleteRecipe)
  }

  return (
    <>
      <Header currentUser={currentUser} logout={logout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/AddMember" element={<AddMember />} />
        <Route
          path="/AddRecipe"
          element={<AddRecipe currentUser={currentUser} />}
        />
        <Route path="/Cookbook" element={<Cookbook />} />
        <Route path="/EditRecipe" element={<EditRecipe updateRecipe={updateRecipe} recipes={recipe} />} />
        <Route path="/FamilyTree" element={<FamilyTree />} />
        <Route path="/LogIn" element={<LogIn logIn={logIn} />} />
        <Route path="/Potluck" element={<Potluck potluck={recipe} />} />
        <Route
          path="/RecipeDetails/:id"
          element={<RecipeDetails recipeDetails={recipe} />}
        />
        <Route path="/SignUp" element={<SignUp signUp={signUp} />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/MyRecipes"
          element={<RecipeProtectedIndex myRecipes={recipe} />}
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App
