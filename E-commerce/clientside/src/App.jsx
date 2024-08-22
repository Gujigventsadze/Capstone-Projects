import './Header.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Middlepart from './components/Middlepart';
import Herosec from './components/Herosec';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<><Middlepart /> <Herosec /></>} />
        <Route path='/products' element={<Products />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
