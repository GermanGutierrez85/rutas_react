import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../components/Ejercicios_resueltos/Ejercicio1/Home";
import Contact from "../views/Ejercicio1/Contact";

export default function RouterPrincipal() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        
     </Routes>
    </Router>
  )
}
