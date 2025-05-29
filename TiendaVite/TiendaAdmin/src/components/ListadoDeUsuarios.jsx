import { useState } from 'react'

function ListadoDeUsuarios({ cambiarVista }) {
  const [busqueda, setBusqueda] = useState("")
  const [usuarios, setUsuarios] = useState([
    { id: 1, nombre: "Juan Perez", fecha: "20/01/2025", estado: "Activo", foto: "perSon.jpg" },
    { id: 2, nombre: "María Gonzales", fecha: "20/01/2025", estado: "Activo", foto: "perSon2.png" },
    { id: 3, nombre: "Marco Aurelio", fecha: "20/01/2025", estado: "Activo", foto: "perSon3.png" },
    { id: 4, nombre: "Ana Días", fecha: "20/01/2025", estado: "Activo", foto: "perSon2.png" },
    { id: 5, nombre: "Juan Perez", fecha: "20/01/2025", estado: "Activo", foto: "perSon.jpg" },
    { id: 6, nombre: "María Gonzales", fecha: "20/01/2025", estado: "Activo", foto: "perSon2.png" },
    { id: 7, nombre: "Marco Aurelio", fecha: "20/01/2025", estado: "Activo", foto: "perSon3.png" },
    { id: 8, nombre: "Ana Días", fecha: "20/01/2025", estado: "Activo", foto: "perSon2.png" },
    { id: 9, nombre: "Juan Perez", fecha: "20/01/2025", estado: "Activo", foto: "perSon.jpg" },
    { id: 10, nombre: "María Gonzales", fecha: "20/01/2025", estado: "Activo", foto: "perSon2.png" },
    { id: 11, nombre: "Marco Aurelio", fecha: "20/01/2025", estado: "Activo", foto: "perSon3.png" },
    { id: 12, nombre: "Ana Días", fecha: "20/01/2025", estado: "Activo", foto: "perSon2.png" },
    { id: 13, nombre: "Marco Aurelio", fecha: "20/01/2025", estado: "Activo", foto: "perSon3.png" },
  ])

  const usuariosFiltrados = usuarios.filter(u =>
    u.nombre.toLowerCase().includes(busqueda.toLowerCase())
  )

  const toggleEstado = (id) => {
    const nuevosUsuarios = usuarios.map(u => {
      if (u.id === id) {
        return {
          ...u,
          estado: u.estado === "Activo" ? "Inactivo" : "Activo",
        }
      }
      return u
    })
    setUsuarios(nuevosUsuarios)
  }

  return (
    <main className="usuario-detalle">
      <h2>Listado de usuarios</h2>

      <div className="buscador-usuarios">
        <input
          type="text"
          placeholder="Buscar un usuario..."
          value={busqueda}
          onChange={e => setBusqueda(e.target.value)}
        />
        <button onClick={() => { }}>
          Buscar
        </button>
      </div>

      <table className="tabla-admin">
        <thead>
          <tr>
            <th>Nombre completo</th>
            <th>Fecha de registro</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuariosFiltrados.length === 0 ? (
            <tr>
              <td colSpan="4" style={{ textAlign: "center", padding: "20px" }}>
                No se encontraron usuarios.
              </td>
            </tr>
          ) : (
            usuariosFiltrados.map(usuario => (
              <tr key={usuario.id}>
                <td className="nombre-usuario">
                  <img
                    src={`/img/${usuario.foto}`}
                    alt={usuario.nombre}
                    className="foto-usuario"
                  />
                  {usuario.nombre}
                </td>
                <td>{usuario.fecha}</td>
                <td className={usuario.estado === "Activo" ? "estado-activo" : "estado-inactivo"}>
                  {usuario.estado}
                </td>
                <td>
                  <button
                    className="btn-admin secundario"
                    onClick={() => toggleEstado(usuario.id)}
                  >
                    Desactivar
                  </button>
                  <button className="btn-admin" onClick={() => cambiarVista('detalle-usuario')}>Ver detalle</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </main>
  )
}

export default ListadoDeUsuarios