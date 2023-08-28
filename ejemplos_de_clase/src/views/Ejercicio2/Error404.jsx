import { Link } from "react-router-dom"
import Home from "../../components/Ejercicios_resueltos/Ejercicio1/Home"
export default function Error404() {
  return (
    <div>
     <h1>ERROR 404 - Page not found</h1>
     <Link to="/">Volver a Home</Link>
    </div>
  )
}
