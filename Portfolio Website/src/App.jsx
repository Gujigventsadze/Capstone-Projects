import { NavBar } from "./components/Navbar";
import { Welcome } from "./components/Welcome";
import { Skills } from "./components/Skills";

function App() {

  return (
    <div className="app">
      <NavBar />
      <Welcome />
      <Skills />
    </div>
  )
}

export default App
