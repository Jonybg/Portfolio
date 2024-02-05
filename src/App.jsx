
import './App.css'
import { NavBar } from "./Components/Navbar/NavBar"
import { Home } from "./Components/Home/Home"
import { About } from "./Components/About/About"
import { Skills } from './Components/Skills/Skills'
import { Projects } from './Components/Projects/Projects'
import { Contact } from "./Components/Contact/Contact"

export const App = () => {


  return (
    <>

      <NavBar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />


    </>
  )
}

