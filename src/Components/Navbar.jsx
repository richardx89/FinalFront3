import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { ContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { theme, changeTheme } = useContext(ContextGlobal)

  const handleChangeTheme = () =>{
    changeTheme(theme)
  }

  return (
    <nav className={`${theme === "dark" ? "dark" : null}`}>
      <div>DH Odonto</div>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <div className='navigation'>
        <ul>
          <li>
            <NavLink to='/home'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact'>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to='/favs'>
              Favs
            </NavLink>
          </li>
        </ul>
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <button onClick={handleChangeTheme}>
          <i class={`las ${theme === "light" ? "la-moon" : "la-sun"}`}></i>
        </button>
      </div>

    </nav>
  )
}

export default Navbar