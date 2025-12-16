import { useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import StartPage from "./pages/StartPage";

function App() {
  const navigate = useNavigate();

  return (
    <>
      <StartPage/>
    </>
  );
}

export default App;
