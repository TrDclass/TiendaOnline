import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function ListaProductos() {
  const navigate = useNavigate();
  const [productos] = useState([
    { id: '001', imagen: 'productoZapatillas.webp', nombre: 'Zapatillas Running Pro', precio: 'S/ 199.00', stock: 25, estado: 'Activo' },
    { id: '002', imagen: 'productoCamiseta.webp', nombre: 'Camiseta Deportiva', precio: 'S/ 59.90', stock: 42, estado: 'Activo' },
    { id: '003', imagen: 'productoMochila.webp', nombre: 'Mochila Viajera', precio: 'S/ 129.00', stock: 0, estado: 'Activo' },
    { id: '004', imagen: 'productoReloj.webp', nombre: 'Reloj Inteligente', precio: 'S/ 299.00', stock: 15, estado: 'Activo' },
    { id: '005', imagen: 'productoZapatillas.webp', nombre: 'Zapatillas Running Pro', precio: 'S/ 199.00', stock: 25, estado: 'Activo' },
    { id: '006', imagen: 'productoCamiseta.webp', nombre: 'Camiseta Deportiva', precio: 'S/ 59.90', stock: 42, estado: 'Activo' },
    { id: '007', imagen: 'productoMochila.webp', nombre: 'Mochila Viajera', precio: 'S/ 129.00', stock: 0, estado: 'Activo' },
    { id: '008', imagen: 'productoReloj.webp', nombre: 'Reloj Inteligente', precio: 'S/ 299.00', stock: 15, estado: 'Activo' },
    { id: '009', imagen: 'productoZapatillas.webp', nombre: 'Zapatillas Running Pro', precio: 'S/ 199.00', stock: 25, estado: 'Activo' },
    { id: '010', imagen: 'productoCamiseta.webp', nombre: 'Camiseta Deportiva', precio: 'S/ 59.90', stock: 42, estado: 'Activo' }
  ]);

  const handleEliminar = (id) => {
    // Lógica para eliminar producto
    console.log(`Eliminar producto con ID: ${id}`);
  };

  return (
    <div className="admin-container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Lista de Productos</h1>
        <Link to="/admin/agregar-producto" className="btn-admin verde">
          + Agregar Producto
        </Link>
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
              <td><img src={`/img/${producto.imagen}`} alt="Producto" style={{ width: '50px', height: '50px', objectFit: 'cover' }} /></td>
              <td>{producto.nombre}</td>
              <td>{producto.precio}</td>
              <td>{producto.stock}</td>
              <td className="estado-activo">{producto.estado}</td>
              <td>
                <Link 
                  to={`/admin/producto/${producto.id}`} 
                  className="btn-admin"
                >
                  Editar
                </Link>
                <button className="btn-admin secundario">Desactivar</button>
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