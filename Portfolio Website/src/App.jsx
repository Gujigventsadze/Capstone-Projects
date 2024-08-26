import { NavBar } from "./components/Navbar";
import { Welcome } from "./components/Welcome";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";

function App() {

  return (
    <div className="app">
      <NavBar />
      <Welcome />
      <Skills />
      <Projects />
    </div>
  )
}

export default App
