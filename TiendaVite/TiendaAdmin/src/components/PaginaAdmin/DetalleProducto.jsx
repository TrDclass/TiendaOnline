import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchProductoById, updateProducto } from './api';

function DetalleProducto() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    stock: '',
    categoria: 'Zapatillas',
    estado: 'Activo',
    imagen: 'placeholder-producto.webp'
  });

  useEffect(() => {
    const cargarProducto = async () => {
      try {
        const productoData = await fetchProductoById(id);
        setProducto(productoData);
        setFormData({
          nombre: productoData.nombre,
          descripcion: productoData.descripcion,
          precio: productoData.precio,
          stock: productoData.stock,
          categoria: productoData.categoria,
          estado: productoData.estado,
          imagen: productoData.imagen
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    cargarProducto();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const updatedProduct = await updateProducto(id, formData);
      setProducto(updatedProduct);
      // No navegamos para seguir editando si es necesario
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDesactivar = async () => {
    if (window.confirm(`¿Estás seguro de ${producto.estado === 'Activo' ? 'desactivar' : 'activar'} este producto?`)) {
      try {
        const estadoActualizado = producto.estado === 'Activo' ? 'Inactivo' : 'Activo';
        const updatedProduct = await updateProducto(id, { estado: estadoActualizado });
        setProducto(updatedProduct);
        setFormData({
          ...formData,
          estado: estadoActualizado
        });
      } catch (err) {
        setError(err.message);
      }
    }
  };

  if (loading) return <div className="admin-container">Cargando...</div>;
  if (error) return <div className="admin-container">Error: {error}</div>;
  if (!producto) return <div className="admin-container">Producto no encontrado</div>;

  return (
    <div className="admin-container">
      <h1>Editar Producto #{producto.id}</h1>

      {error && <div className="error-message">{error}</div>}

      <form className="formulario-admin" onSubmit={handleSubmit}>
        <div className="grupo-formulario">
          <label>Nombre del Producto</label>
          <input 
            type="text" 
            name="nombre"
            placeholder="Ej: Zapatillas Running Pro" 
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div className="grupo-formulario">
          <label>Descripción</label>
          <textarea 
            name="descripcion"
            placeholder="Descripción detallada del producto..."
            value={formData.descripcion}
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
              value={formData.precio}
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
              value={formData.stock}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="grupo-formulario">
          <label>Categoría</label>
          <select 
            name="categoria"
            value={formData.categoria}
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
            value={formData.estado}
            onChange={handleChange}
            required
          >
            <option value="Activo">Activo</option>
            <option value="Inactivo">Inactivo</option>
          </select>
        </div>

        <div className="grupo-formulario">
          <label>Imagen del Producto</label>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <img 
              src={`/img/${formData.imagen}`} 
              alt="Preview" 
              style={{ 
                width: '100px', 
                height: '100px', 
                objectFit: 'cover',
                borderRadius: '8px',
                border: '1px solid #ddd'
              }}
              onError={(e) => {
                e.target.src = '/img/placeholder-producto.webp';
              }}
            />
            <input 
              type="file" 
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onload = (event) => {
                    setFormData({
                      ...formData,
                      imagen: event.target.result
                    });
                  };
                  reader.readAsDataURL(file);
                }
              }}
            />
          </div>
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
            type="button" 
            className={`btn-admin ${producto.estado === 'Activo' ? 'secundario' : 'verde'}`}
            onClick={handleDesactivar}
            disabled={loading}
          >
            {producto.estado === 'Activo' ? 'Desactivar Producto' : 'Activar Producto'}
          </button>
          <button 
            type="submit" 
            className="btn-admin verde"
            disabled={loading}
          >
            {loading ? 'Guardando...' : 'Guardar Cambios'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default DetalleProducto;