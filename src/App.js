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
      <Routes>
        <Route path = "/" element = {<div><Navbar /><Home /></div>}> </Route>
        <Route path = "/projects" element = {<div><Navbar /><Projects /></div>}></Route>
        <Route path = "/skills" element = {<div><Navbar /><Skills /></div>}> </Route>
        <Route path = "/about" element = {<div><Navbar /><About /></div>}></Route>
        <Route path = "/atomz" element = {<Atomz />}> </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
