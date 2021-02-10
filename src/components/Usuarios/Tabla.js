import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Tabla = (props) => {

  const ponerFilas = () => props.usuarios.map((item, key) => (
    <tr key={item.id}>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.website}</td>
      <td>
        <Link to={`/publicaciones/${key}`}>
          <div className="eye-solid icon"></div>
        </Link>
      </td>
    </tr>
  ))

  return (
    <table className="tabla">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Enlace</th>
        </tr>
      </thead>
      <tbody>{ponerFilas()}</tbody>
    </table>
  )
}

const MapStateToProps = (reducers) => {
  return reducers.usuariosReducer;
}

export default connect(MapStateToProps)(Tabla)