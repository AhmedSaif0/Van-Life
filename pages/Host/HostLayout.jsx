import React from 'react'
import { NavLink,Outlet  } from 'react-router-dom'
import './HostLayout.css'

const HostLayout = () => {
  return (
    <>
      
      <nav className="host-nav">
        <NavLink to="/host"
                 className={({isActive}) => isActive ? 'Link-style' : null}
            >Dashboard</NavLink>

        <NavLink to="/host/income"
                 className={({isActive}) => isActive ? 'Link-style' : null}
                 >Income</NavLink>

         <NavLink to="/host/reviews"
                 className={({isActive}) => isActive ? 'Link-style' : null}

            >Reviews</NavLink>
        </nav>
          <Outlet/>
       
    </>
  )
}

export default HostLayout
