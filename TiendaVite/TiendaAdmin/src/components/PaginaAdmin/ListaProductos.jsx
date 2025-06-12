import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchProductos, deleteProducto } from './api';

function ListaProductos() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        const data = await fetchProductos();
        setProductos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    cargarProductos();
  }, []);

  const handleEliminar = async (id) => {
    if (window.confirm('¿Estás seguro de eliminar este producto?')) {
      try {
        await deleteProducto(id);
        setProductos(productos.filter(p => p.id !== id));
      } catch (err) {
        setError(err.message);
      }
    }
  };

  if (loading) return <div className="admin-container">Cargando...</div>;
  if (error) return <div className="admin-container">Error: {error}</div>;

  return (
    <div className="admin-container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Lista de Productos</h1>
        <button 
          className="btn-admin verde" 
          onClick={() => navigate('/admin/agregar-producto')}
        >
          + Agregar Producto
        </button>
      </div>

      <div style={{ margin: '20px 0' }}>
        <input
          type="text"
          placeholder="Filtrar por nombre, serie o ID..."
          style={{ padding: '8px 12px', width: '300px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
      </div>

      <table className="tabla-admin">
        <thead>
          <tr>
            <th>ID</th>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id}>
              <td>#{producto.id}</td>
              <td>
                <img 
                  src={`/img/${producto.imagen}`} 
                  alt="Producto" 
                  style={{ width: '50px', height: '50px', objectFit: 'cover' }} 
                  onError={(e) => {
                    e.target.src = '/img/placeholder-producto.webp';
                  }}
                />
              </td>
              <td>{producto.nombre}</td>
              <td>S/ {producto.precio}</td>
              <td>{producto.stock}</td>
              <td className={`estado-${producto.estado.toLowerCase()}`}>
                {producto.estado}
              </td>
              <td>
                <button 
                  className="btn-admin" 
                  onClick={() => navigate(`/admin/producto/${producto.id}`, { state: { producto } })}
                >
                  Editar
                </button>
                <button 
                  className="btn-admin secundario"
                  onClick={() => navigate(`/admin/producto/${producto.id}`, { 
                    state: { 
                      producto,
                      modo: 'desactivar' 
                    } 
                  })}
                >
                  {producto.estado === 'Activo' ? 'Desactivar' : 'Activar'}
                </button>
                <button
                  className="btn-eliminar"
                  title="Eliminar"
                  onClick={() => handleEliminar(producto.id)}
                >
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="paginacion">
        <button className="activo">1</button>
        <button>2</button>
        <button>3</button>
        <span>...</span>
        <button>10</button>
      </div>
    </div>
  );
}

export default ListaProductos;