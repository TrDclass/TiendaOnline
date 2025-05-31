function DetalleProducto({ cambiarVista }) {
  return (
    <div className="admin-container">
      <h1>Detalle de Producto</h1>

      <div className="detalle-producto">
        <div>
          <img src="/productoZapatillas.webp" alt="Producto" className="imagen-producto" />
          <div style={{ marginTop: '10px' }}>
            <button className="btn-admin">Cambiar Imagen</button>
          </div>
        </div>

        <div className="info-producto">
          <div className="grupo-formulario">
            <label>Nombre del Producto</label>
            <input type="text" value="Zapatillas Running Pro" />
          </div>

          <div className="grupo-formulario">
            <label>Descripción</label>
            <textarea>Zapatillas ideales para running con tecnología de amortiguación avanzada y suela antideslizante.</textarea>
          </div>

          <div style={{ display: 'flex', gap: '20px' }}>
            <div className="grupo-formulario" style={{ flex: 1 }}>
              <label>Precio (S/)</label>
              <input type="number" value="199.00" step="0.01" />
            </div>

            <div className="grupo-formulario" style={{ flex: 1 }}>
              <label>Stock</label>
              <input type="number" value="25" />
            </div>
          </div>

          <div className="grupo-formulario">
            <label>Categoría</label>
            <select value="Zapatillas">
              <option>Zapatillas</option>
              <option>Ropa</option>
              <option>Accesorios</option>
            </select>
          </div>

          <div className="grupo-formulario">
            <label>Estado</label>
            <select>
              <option selected>Activo</option>
              <option>Inactivo</option>
            </select>
          </div>

          <div className="acciones-formulario">
            <button className="btn-admin secundario" onClick={() => cambiarVista('productos')}>Cancelar</button>
            <button className="btn-admin">Guardar Cambios</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetalleProducto