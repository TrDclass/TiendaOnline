function AgregarProducto({ cambiarVista }) {
  return (
    <div className="admin-container">
      <h1>Agregar Nuevo Producto</h1>

      <div className="formulario-admin">
        <div className="grupo-formulario">
          <label>Nombre del Producto</label>
          <input type="text" placeholder="Ej: Zapatillas Running Pro" />
        </div>

        <div className="grupo-formulario">
          <label>Descripción</label>
          <textarea placeholder="Descripción detallada del producto..."></textarea>
        </div>

        <div style={{ display: 'flex', gap: '20px' }}>
          <div className="grupo-formulario" style={{ flex: 1 }}>
            <label>Precio (S/)</label>
            <input type="number" placeholder="Ej: 199.00" step="0.01" />
          </div>

          <div className="grupo-formulario" style={{ flex: 1 }}>
            <label>Stock</label>
            <input type="number" placeholder="Ej: 25" />
          </div>
        </div>

        <div className="grupo-formulario">
          <label>Categoría</label>
          <select>
            <option>Seleccione una categoría</option>
            <option>Zapatillas</option>
            <option>Ropa</option>
            <option>Accesorios</option>
          </select>
        </div>

        <div className="grupo-formulario">
          <label>Imagen del Producto</label>
          <input type="file" />
        </div>

        <div className="acciones-formulario">
          <button className="btn-admin secundario" onClick={() => cambiarVista('productos')}>Cancelar</button>
          <button className="btn-admin verde">Guardar Producto</button>
        </div>
      </div>
    </div>
  )
}

export default AgregarProducto