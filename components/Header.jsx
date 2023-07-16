import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
  return (
    <div>
    <header >
        <NavLink className="site-logo" to="/">#VanLife</NavLink>
        <nav>
          <NavLink to="/host"
                   style={({ isActive }) => isActive ? activeStyles : null} 
            >
            Host</NavLink>

          <NavLink to="/about"
                   style={({ isActive }) => isActive ? activeStyles : null}        
            >
             About</NavLink>

          <NavLink to="/Vans"
                   style={({ isActive }) => isActive ? activeStyles : null}
          >
            Vans</NavLink>
        </nav>
    </header>
    </div>
  )
}

export default Header
