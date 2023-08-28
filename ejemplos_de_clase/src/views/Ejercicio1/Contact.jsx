import { useState } from "react"
import { Link } from "react-router-dom"

export default function Contact() {
  const [mensaje, setMensaje] = useState('');
  function handleMsj(e){
    e.preventDefault();
    setMensaje("Tu mensaje se envio con exito!!")
    e.target.nombre.value='';
    e.target.msj.value='';
    
  }

  return (
    <>
    <form onSubmit={handleMsj} className="formulario">
      <div>
        <label form="name">Nombre: </label>
        <input type="text" placeholder="Nombre" name="nombre"/>
      </div>
      <div>
      <label form="name">Mensaje: </label>
      <textarea type="text" placeholder="Mensaje"name="msj"/>
      </div>      
      <input type="submit" className="send"/>
    </form>
    <p>{mensaje}</p>
    <Link to="/">Volver al inicio</Link>
    
    </>
  )
}
