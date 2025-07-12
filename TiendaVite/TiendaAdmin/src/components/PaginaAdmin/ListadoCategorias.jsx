import { useState } from 'react'

const categoriasIniciales = [
  {
    id: 1,
    nombre: 'Frutas y verduras',
    descripcion: 'Esta categoría incluye una amplia variedad de productos frescos y naturales, desde frutas tropicales hasta verduras de temporada, perfectas para una dieta saludable y equilibrada.',
  },
  {
    id: 2,
    nombre: 'Carnes, aves y pescados',
    descripcion: 'Aquí encontrarás una selección de carnes rojas, blancas y productos del mar, todos de alta calidad, ideales para preparar comidas nutritivas y deliciosas para cualquier ocasión.',
  },
  {
    id: 3,
    nombre: 'Abarrotes',
    descripcion: 'En esta categoría se agrupan productos no perecederos como granos, pastas, enlatados, aceites, condimentos y más, esenciales para tener siempre a mano en la despensa de tu hogar.',
  },
  {
    id: 4,
    nombre: 'Panadería',
    descripcion: 'Todo lo relacionado con panes, pasteles, galletas y productos horneados. Ideal para quienes disfrutan de un buen pan fresco o dulces artesanales, preparados con ingredientes de la mejor calidad.',
  },
  {
    id: 5,
    nombre: 'Congelados',
    descripcion: 'Aquí podrás encontrar una variedad de productos congelados como vegetales, frutas, carnes, pescados y platos listos para calentar, lo que hace fácil y rápido preparar una comida casera.',
  },
  {
    id: 6,
    nombre: 'Juguetes',
    descripcion: 'Esta categoría abarca una amplia gama de juguetes educativos, creativos y de entretenimiento para niños de todas las edades, diseñados para estimular su desarrollo y proporcionarles horas de diversión.',
  },
  {
    id: 7,
    nombre: 'Ropa',
    descripcion: 'Encuentra ropa de temporada, calzado y accesorios para toda la familia, en diferentes estilos y tamaños, para cada ocasión, desde ropa casual hasta formal, con un enfoque en comodidad y moda.',
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