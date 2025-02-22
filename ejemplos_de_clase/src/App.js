import "./App.css";

import { useState } from "react";

import RouterBasico from "./routes/RouterBasico"
import RouterAuth from "./routes/RouterAuth"
import RouterParams from "./routes/RouterParams"
import RouterAnidados from "./routes/RouterAnidados"
import RouterAnidadosOutlet from "./routes/RouterAnidadosOutlet"
import RouterPrincipal from "./routes/RouterPrincipal";
import RouterEjercicio2 from "./routes/RouterEjercicio2";


function App() {
  const [autenticado, setAutenticado] = useState(false);

  return (
    <div className="App">
        {/* 1. Router básico con una barra navegacion */}
        {/* <RouterBasico/> */}

        {/* 2. Router con control de autenticación */}
        {/* <RouterAuth autenticado={autenticado}/> */}

        {/* 3. Rutas con parámetros con useParams */}
        {/* <RouterParams /> */}

        {/* 4. Rutas anidadas (subrutas) */}
        {/* <RouterAnidados /> */}

        {/* 5. Rutas anidadas (subrutas) */}
        {/* <RouterAnidadosOutlet /> */}
        {/* <RouterPrincipal /> */}
        <RouterEjercicio2 />
       
       
    </div>
  );
}

export default App;
