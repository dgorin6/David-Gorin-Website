import './App.css';
import { Home } from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Atomz from './components/Atomz';

function App() {
  return (
    <BrowserRouter>
        <Navbar />
      <Routes>
        <Route path = "/" element = {<Home />}> </Route>
        <Route path = "/projects" element = {<Projects />}></Route>
        <Route path = "/skills" element = {<Skills />}> </Route>
        <Route path = "/about" element = {<About />}> </Route>
        <Route path = "/atomz" element = {<Atomz />}> </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
