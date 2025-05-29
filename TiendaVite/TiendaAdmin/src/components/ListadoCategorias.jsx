import { useState } from 'react'

const categoriasIniciales = [
  {
    id: 1,
    nombre: 'Frutas y verduras',
    descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ....',
  },
  {
    id: 2,
    nombre: 'Carnes, aves y pescados',
    descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ....',
  },
  {
    id: 3,
    nombre: 'Abarrotes',
    descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ....',
  },
  {
    id: 4,
    nombre: 'Panadería',
    descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ....',
  },
  {
    id: 5,
    nombre: 'Congelados',
    descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ....',
  },
  {
    id: 6,
    nombre: 'Juguetes',
    descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ....',
  },
  {
    id: 7,
    nombre: 'Ropa',
    descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ....',
  },
];

function ListadoCategorias({ cambiarVista }) {
  const [categorias, setCategorias] = useState(categoriasIniciales);
  const [busqueda, setBusqueda] = useState('');

  const categoriasFiltradas = categorias.filter(cat =>
    cat.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  const handleEliminar = (id) => {
    if (window.confirm('¿Estás seguro que deseas eliminar esta categoría?')) {
      setCategorias(categorias.filter(cat => cat.id !== id));
    }
  };

  const handleAgregar = () => {
    alert('Función para agregar categoría aún no implementada');
  };


  return (
    <main className="contenido-principal">
      <h2>Listado de categorías</h2>

      <div className="buscador-contenido">
        <input
          type="text"
          placeholder="Buscar un producto..."
          value={busqueda}
          onChange={e => setBusqueda(e.target.value)}
        />
        <button className="btn-agregar" onClick={handleAgregar}> + Agregar categoría</button>
      </div>

      <div className="tabla-wrapper">
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {categoriasFiltradas.length === 0 && (
              <tr>
                <td colSpan="3" style={{ textAlign: 'center', padding: '20px' }}>
                  No hay categorías para mostrar
                </td>
              </tr>
            )}
            {categoriasFiltradas.map(cat => (
              <tr key={cat.id}>
                <td><strong>{cat.nombre}</strong></td>
                <td>{cat.descripcion}</td>
                <td className="acciones">
                  <button
                    className="btn-eliminar"
                    title="Eliminar"
                    onClick={() => handleEliminar(cat.id)}
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default ListadoCategorias