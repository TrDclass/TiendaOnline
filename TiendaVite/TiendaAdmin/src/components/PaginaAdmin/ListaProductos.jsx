import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import productoApi from '../../api/productoApi';

function ListaProductos() {
  const navigate = useNavigate();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        const data = await productoApi.findAll();
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
        await productoApi.remove(id);
        setProductos(productos.filter(p => p.id !== id));
      } catch (err) {
        setError(err.message);
      }
    }
  };

  const getImageUrl = (imagen) => `/img/${imagen}`;

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
                  src={getImageUrl(producto.imagen)} 
                  alt="Producto" 
                  style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '4px' }}
                  onError={(e) => {
                    e.target.src = '/img/placeholder-producto.webp';
                  }}
                />
              </td>
              <td>{producto.nombre}</td>
              <td>S/ {producto.precio}</td>
              <td>{producto.stock}</td>
              <td className={`estado-${producto.estado?.toLowerCase()}`}>
                {producto.estado}
              </td>
              <td>
                <button 
                  className="btn-admin" 
                  onClick={() => navigate(`/admin/producto/${producto.id}`)}
                >
                  Editar
                </button>
                <button 
                  className="btn-admin secundario"
                  onClick={() => handleEliminar(producto.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaProductos;
