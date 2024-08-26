import { NavBar } from "./components/Navbar";
import { Welcome } from "./components/Welcome";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

function App() {

  return (
    <div className="app">
      <NavBar />
      <Welcome />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
