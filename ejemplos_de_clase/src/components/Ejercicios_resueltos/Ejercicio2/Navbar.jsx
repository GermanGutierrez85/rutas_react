import { NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <>
    <nav>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/componente1">Comp1</NavLink>
            </li>
            <li>
                <NavLink to="/componente2">Comp2</NavLink>
            </li>
            <li>
                <NavLink to="/subrutas">SubRutas</NavLink>
            </li>
        </ul>
    </nav>
    </>
  )
}
