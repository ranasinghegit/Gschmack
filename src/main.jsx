import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Homepage from "./pages/HomePage.jsx";
import StartPage from "./pages/StartPage.jsx";
import Favourite from "./pages/Favourite.jsx";
// import AddRecipe from "./pages/AddRecipe.jsx";
import RecipeList from "./pages/RecipeList.jsx";
import UpdateRecipe from "./pages/UpdateRecipe.jsx";
import AddRecipee from "./pages/addRecipee.jsx";

createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/favourite" element={<Favourite />} />
      {/* <Route path="/addrecipe" element={<AddRecipe />} /> */}
      <Route path="/recipelist" element={<RecipeList />} />
      <Route path="/updaterecipe" element={<UpdateRecipe/>}/>
      <Route path="/addrecipee" element={<AddRecipee/>}/>

    </Routes>
  </Router>
);
