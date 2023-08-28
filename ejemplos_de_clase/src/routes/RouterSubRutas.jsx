import { Outlet, NavLink } from "react-router-dom"


export default function RouterSubRutas() {
  return (
    <>
      <aside>
        <ul>
          <li>
            <NavLink to="/subrutas/inicio">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/subrutas/subruta1">Subruta 1</NavLink>
          </li>
          <li>
            <NavLink to="/subrutas/subruta2">Subruta 2</NavLink>
          </li>
        </ul>
      </aside>

      <Outlet />
    </>
  )
}
