import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import productoApi from '../../api/productoApi';

function DetalleProducto() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    stock: '',
    categoria: 'Zapatillas',
    estado: 'Activo',
    imagen: null
  });
  const [previewImage, setPreviewImage] = useState(null);
  const [imagenFile, setImagenFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cargarProducto = async () => {
      try {
        const data = await productoApi.findOne(id);
        setProducto(data);
        setFormData({
          nombre: data.nombre,
          descripcion: data.descripcion,
          precio: data.precio,
          stock: data.stock,
          categoria: data.categoria || 'Zapatillas',
          estado: data.estado,
          imagen: data.imagen
        });
        setPreviewImage(`/img/${data.imagen}`);
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
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagenFile(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const data = new FormData();
      data.append('nombre', formData.nombre);
      data.append('descripcion', formData.descripcion);
      data.append('precio', formData.precio);
      data.append('stock', formData.stock);
      data.append('categoria', formData.categoria);
      data.append('estado', formData.estado);
      if (imagenFile) data.append('imagen', imagenFile);

      await productoApi.updateForm(id, data);
      navigate('/admin/productos');
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
        const update = new FormData();
        update.append('nombre', formData.nombre);
        update.append('descripcion', formData.descripcion);
        update.append('precio', formData.precio);
        update.append('stock', formData.stock);
        update.append('categoria', formData.categoria);
        update.append('estado', estadoActualizado);
        if (imagenFile) update.append('imagen', imagenFile);

        await productoApi.updateForm(id, update);
        setProducto({ ...producto, estado: estadoActualizado });
        setFormData({ ...formData, estado: estadoActualizado });
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

      <form className="formulario-admin" onSubmit={handleSubmit}>
        {/* Campos comunes */}
        <div className="grupo-formulario">
          <label>Nombre del Producto</label>
          <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
        </div>

        <div className="grupo-formulario">
          <label>Descripción</label>
          <textarea name="descripcion" value={formData.descripcion} onChange={handleChange} required />
        </div>

        <div style={{ display: 'flex', gap: '20px' }}>
          <div className="grupo-formulario" style={{ flex: 1 }}>
            <label>Precio (S/)</label>
            <input type="number" name="precio" step="0.01" min="0" value={formData.precio} onChange={handleChange} required />
          </div>
          <div className="grupo-formulario" style={{ flex: 1 }}>
            <label>Stock</label>
            <input type="number" name="stock" min="0" value={formData.stock} onChange={handleChange} required />
          </div>
        </div>

        <div className="grupo-formulario">
          <label>Categoría</label>
          <select name="categoria" value={formData.categoria} onChange={handleChange} required>
            <option value="Zapatillas">Zapatillas</option>
            <option value="Ropa">Ropa</option>
            <option value="Accesorios">Accesorios</option>
          </select>
        </div>

        <div className="grupo-formulario">
          <label>Estado</label>
          <select name="estado" value={formData.estado} onChange={handleChange} required>
            <option value="Activo">Activo</option>
            <option value="Inactivo">Inactivo</option>
          </select>
        </div>

        {/* Imagen */}
        <div className="grupo-formulario">
          <label>Imagen del Producto</label>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '10px' }}>
            <img
              src={previewImage}
              alt="Preview"
              style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px', border: '1px solid #ddd' }}
              onError={(e) => { e.target.src = '/img/placeholder-producto.webp'; }}
            />
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </div>
        </div>

        <div className="acciones-formulario">
          <button type="button" className="btn-admin secundario" onClick={() => navigate('/admin/productos')} disabled={loading}>
            Cancelar
          </button>
          <button type="button" className={`btn-admin ${producto.estado === 'Activo' ? 'secundario' : 'verde'}`} onClick={handleDesactivar} disabled={loading}>
            {producto.estado === 'Activo' ? 'Desactivar Producto' : 'Activar Producto'}
          </button>
          <button type="submit" className="btn-admin verde" disabled={loading}>
            {loading ? 'Guardando...' : 'Guardar Cambios'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default DetalleProducto;
