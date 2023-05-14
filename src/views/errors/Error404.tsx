// import React from 'react'
import {Link} from 'react-router-dom'

export default function Error404() {
  return (
    <div>
      <h2>Error 404</h2>
      <p>Esta ruta no existe en esta página. Haga click en el siguiente botón para volver al inicio...</p>
      <Link to="/">Volver al Inicio</Link>
    </div>
  )
}
