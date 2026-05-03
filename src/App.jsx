import { useState } from "react";
import Header from "./components/Header";
import ProjectList from "./components/ProjectList";
import AddProjectForm from "./components/AddProjectForm";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import "./App.css"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <SearchBar/>
      <AddProjectForm/>
      <ProjectList/>
      <Footer/>
    </>
  )
}

export default App;
