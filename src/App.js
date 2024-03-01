import { Routes, Route } from "react-router-dom"
import { useState } from "react"
import "./App.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import About from "./pages/About"
import AddMember from "./pages/AddMember"
import AddRecipe from "./pages/AddRecipe"
import Cookbook  from "./pages/Cookbook"
import EditRecipe  from "./pages/EditRecipe"
import FamilyTree from "./pages/FamilyTree"
import Home from "./pages/Home"
import LogIn from "./pages/LogIn"
import NotFound from "./pages/NotFound"
import Potluck from "./pages/Potluck"
import RecipeDetails from "./pages/RecipeDetails"
import SignUp from "./pages/SignUp"
import mockUsers from "./mockUsers"
import mockRecipes from "./mockRecipes"

const App = () => {
  const [currentUser, setCurrentUser] = useState(mockUsers[0])
  const [recipe, setRecipes] = useState(mockRecipes)

  return (
    <>
      <Header currentUser={currentUser} />
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About/>} />
        <Route path="/AddMember" element={<AddMember />}  />
        <Route path="/AddRecipe" element={<AddRecipe />}/>
        <Route path="/Cookbook" element={<Cookbook />}/>
        <Route path="/EditRecipe" element={<EditRecipe />}/>
        <Route path="/FamilyTree" element={<FamilyTree />}/>
        <Route path="/LogIn" element={<LogIn />}/>
        <Route path="/Potluck" element={<Potluck potluck={recipe} />}/>
        <Route path="/RecipeDetails" element={<RecipeDetails />}/>
        <Route path="/SignUp" element={<SignUp/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
