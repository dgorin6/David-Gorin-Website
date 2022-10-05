
import {NavLink} from 'react-router-dom';
import { useLocation } from 'react-router-dom'
function Navbar() {
  return (
    <header>
        <nav className='navbar'>
        <div className="navbar__container">
            <a href="/" id="navbar__logo"><i className="fas fa-laptop"></i>David Gorin</a>
            <div className="navbar__toggle" id="mobile-menu">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <ul className="navbar__menu">
              <li className="navbar__item">
              <NavLink
                    className={(navData) => (navData.isActive ? 'active' : 'navbar__links')}
                    to="/"> 
                Home
              </NavLink>
              </li>
              <li className="navbar__item">
              <NavLink
                    className={(navData) => (navData.isActive ? 'active' : 'navbar__links')}
                    to="/projects"> 
                Projects
              </NavLink>
              </li>
              <li className="navbar__item">
              <NavLink
                    className={(navData) => (navData.isActive ? 'active' : 'navbar__links')}
                    to="/skills"> 
                Skills
              </NavLink>
              </li>
              <li className="navbar__item">
              <NavLink
                    className={(navData) => (navData.isActive ? 'active' : 'navbar__links')}
                    to="/about"> 
                About
              </NavLink>
              </li>
          </ul>
        </div>
    </nav>
    </header>
  )
}

export default Navbar