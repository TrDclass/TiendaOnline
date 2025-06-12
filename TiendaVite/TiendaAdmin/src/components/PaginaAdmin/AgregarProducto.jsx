import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createProducto } from './api';

function AgregarProducto() {
  const navigate = useNavigate();
  const [producto, setProducto] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    stock: '',
    categoria: 'Zapatillas',
    imagen: 'placeholder-producto.webp',
    estado: 'Activo'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({
      ...producto,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      await createProducto(producto);
      navigate('/admin/productos');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-container">
      <h1>Agregar Nuevo Producto</h1>
      
      {error && <div className="error-message">{error}</div>}

      <form className="formulario-admin" onSubmit={handleSubmit}>
        <div className="grupo-formulario">
          <label>Nombre del Producto</label>
          <input 
            type="text" 
            name="nombre"
            placeholder="Ej: Zapatillas Running Pro" 
            value={producto.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div className="grupo-formulario">
          <label>Descripción</label>
          <textarea 
            name="descripcion"
            placeholder="Descripción detallada del producto..."
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
              placeholder="Ej: 199.00" 
              step="0.01"
              min="0"
              value={producto.precio}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grupo-formulario" style={{ flex: 1 }}>
            <label>Stock</label>
            <input 
              type="number" 
              name="stock"
              placeholder="Ej: 25" 
              min="0"
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
            required
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

        <div className="grupo-formulario">
          <label>Imagen del Producto</label>
          <input 
            type="file" 
            accept="image/*"
            onChange={(e) => {
              // En una implementación real, aquí subirías la imagen
              const file = e.target.files[0];
              if (file) {
                setProducto({
                  ...producto,
                  imagen: URL.createObjectURL(file) // Preview temporal
                });
              }
            }}
          />
        </div>

        <div className="acciones-formulario">
          <button 
            type="button" 
            className="btn-admin secundario" 
            onClick={() => navigate('/admin/productos')}
            disabled={loading}
          >
            Cancelar
          </button>
          <button 
            type="submit" 
            className="btn-admin verde"
            disabled={loading}
          >
            {loading ? 'Guardando...' : 'Guardar Producto'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AgregarProducto;