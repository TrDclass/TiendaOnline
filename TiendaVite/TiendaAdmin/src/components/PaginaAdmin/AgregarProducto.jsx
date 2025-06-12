import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function AgregarProducto() {
  const navigate = useNavigate();
  const [producto, setProducto] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    stock: '',
    categoria: '',
    imagen: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setProducto({
      ...producto,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para guardar el producto
    console.log('Producto a guardar:', producto);
    
    // Redirigir a la lista de productos después de guardar
    navigate('/admin/productos');
  };

  return (
    <div className="admin-container">
      <h1>Agregar Nuevo Producto</h1>

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
          ></textarea>
        </div>

        <div style={{ display: 'flex', gap: '20px' }}>
          <div className="grupo-formulario" style={{ flex: 1 }}>
            <label>Precio (S/)</label>
            <input 
              type="number" 
              name="precio"
              placeholder="Ej: 199.00" 
              step="0.01"
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
            <option value="">Seleccione una categoría</option>
            <option value="Zapatillas">Zapatillas</option>
            <option value="Ropa">Ropa</option>
            <option value="Accesorios">Accesorios</option>
          </select>
        </div>

        <div className="grupo-formulario">
          <label>Imagen del Producto</label>
          <input 
            type="file" 
            name="imagen"
            onChange={handleChange}
            accept="image/*"
          />
        </div>

        <div className="acciones-formulario">
          <button 
            type="button" 
            className="btn-admin secundario" 
            onClick={() => navigate('/admin/productos')}
          >
            Cancelar
          </button>
          <button type="submit" className="btn-admin verde">
            Guardar Producto
          </button>
        </div>
      </form>
    </div>
  );
}

export default AgregarProducto;