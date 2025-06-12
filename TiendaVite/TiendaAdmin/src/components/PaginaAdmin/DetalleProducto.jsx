import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function DetalleProducto() {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  
  // Estado para los datos del producto
  const [producto, setProducto] = useState({
    id: '',
    imagen: '',
    nombre: '',
    descripcion: '',
    precio: '',
    stock: '',
    categoria: 'Zapatillas',
    estado: 'Activo'
  });

  // Obtener datos del producto (simulando API)
  useEffect(() => {
    // Si viene de ListaProductos con state, usamos esos datos
    if (location.state?.producto) {
      setProducto(location.state.producto);
    } else {
      // Simulación de fetch a API
      const productosEjemplo = [
        { id: '001', imagen: 'productoZapatillas.webp', nombre: 'Zapatillas Running Pro', descripcion: 'Zapatillas ideales para running', precio: '199.00', stock: '25', categoria: 'Zapatillas', estado: 'Activo' },
        { id: '002', imagen: 'productoCamiseta.webp', nombre: 'Camiseta Deportiva', descripcion: 'Camiseta transpirable', precio: '59.90', stock: '42', categoria: 'Ropa', estado: 'Activo' }
      ];
      
      const productoEncontrado = productosEjemplo.find(p => p.id === id);
      if (productoEncontrado) {
        setProducto(productoEncontrado);
      }
    }
  }, [id, location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({
      ...producto,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para guardar los cambios
    console.log('Producto actualizado:', producto);
    
    // Redirigir a la lista de productos después de guardar
    navigate('/admin/productos');
  };

  return (
    <div className="admin-container">
      <h1>Detalle de Producto #{producto.id}</h1>

      <form className="detalle-producto" onSubmit={handleSubmit}>
        <div>
          <img 
            src={`/img/${producto.imagen}`} 
            alt="Producto" 
            className="imagen-producto" 
            onError={(e) => {
              e.target.src = '/img/placeholder-producto.webp';
            }}
          />
          <div style={{ marginTop: '10px' }}>
            <button type="button" className="btn-admin">
              Cambiar Imagen
            </button>
          </div>
        </div>

        <div className="info-producto">
          <div className="grupo-formulario">
            <label>Nombre del Producto</label>
            <input 
              type="text" 
              name="nombre"
              value={producto.nombre} 
              onChange={handleChange}
              required
            />
          </div>

          <div className="grupo-formulario">
            <label>Descripción</label>
            <textarea
              name="descripcion"
              value={producto.descripcion}
              onChange={handleChange}
              required
            />
          </div>

          <div style={{ display: 'flex', gap: '20px' }}>
            <div className="grupo-formulario" style={{ flex: 1 }}>
              <label>Precio (S/)</label>
              <input 
                type="number" 
                name="precio"
                value={producto.precio} 
                step="0.01"
                onChange={handleChange}
                required
              />
            </div>

            <div className="grupo-formulario" style={{ flex: 1 }}>
              <label>Stock</label>
              <input 
                type="number" 
                name="stock"
                value={producto.stock} 
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="grupo-formulario">
            <label>Categoría</label>
            <select 
              name="categoria"
              value={producto.categoria}
              onChange={handleChange}
            >
              <option value="Zapatillas">Zapatillas</option>
              <option value="Ropa">Ropa</option>
              <option value="Accesorios">Accesorios</option>
            </select>
          </div>

          <div className="grupo-formulario">
            <label>Estado</label>
            <select
              name="estado"
              value={producto.estado}
              onChange={handleChange}
            >
              <option value="Activo">Activo</option>
              <option value="Inactivo">Inactivo</option>
            </select>
          </div>

          <div className="acciones-formulario">
            <button 
              type="button" 
              className="btn-admin secundario" 
              onClick={() => navigate('/admin/productos')}
            >
              Cancelar
            </button>
            <button type="submit" className="btn-admin">
              Guardar Cambios
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default DetalleProducto;