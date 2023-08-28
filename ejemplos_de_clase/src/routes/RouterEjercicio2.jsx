import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "../components/Ejercicios_resueltos/Ejercicio2/Navbar"
import SubRutas from "../components/Ejercicios_resueltos/Ejercicio2/SubRutas"
import Componente1 from "../views/Ejercicio2/Componente1"
import Componente2 from "../views/Ejercicio2/Componente2"
import Home from "../views/Ejercicio2/Home"
import Error404 from "../views/Ejercicio2/Error404"
import RouterSubRutas from "./RouterSubRutas"
import InicioSubRutas from "../views/subrutas/InicioSubRutas"
import SubRuta1 from "../views/subrutas/SubRuta1"
import SubRuta2 from "../views/subrutas/SubRuta2"


export default function RouterEjercicio2() {
  return (
    <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/componente1" element={<Componente1/>}/>
            <Route path="/componente2" element={<Componente2/>}/>
            <Route path="/subrutas" element={<SubRutas/>}/>

            <Route path="/subrutas/" element={<RouterSubRutas/>}>
                <Route path="inicio" element={<InicioSubRutas/>}/>
                <Route path="subruta1" element={<SubRuta1/>}/>
                <Route path="subruta2" element={<SubRuta2/>}/>
            </Route>
            <Route path="*" element={<Error404/>}/>
        </Routes>
    </Router>
  )
}
