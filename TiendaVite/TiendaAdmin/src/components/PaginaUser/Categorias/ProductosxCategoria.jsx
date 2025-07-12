import { useLocation } from "react-router-dom";
import productoApi from '../../../api/productoApi'
import { useState, useEffect } from "react";

function ProductosxCategoria() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Para búsqueda
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get('q')?.toLowerCase() || "";

  // Cargar productos desde el backend
  useEffect(() => {
    const cargar = async () => {
      setLoading(true);
      const data = await productoApi.findAll();
      setProductos(data);
      setLoading(false);
    };
    cargar();
  }, []);

  // Filtro por búsqueda (opcional)
  const productosFiltrados = query
    ? productos.filter(p => p.nombre.toLowerCase().includes(query))
    : productos;

  // Render
  if (loading) return <div>Cargando productos...</div>;

  return (
    <section className="contenedor-categorias-productos">
      <nav className="menu-lateral">
        {/* ... tu menú lateral ... */}
      </nav>
      <div className="main-productos">
        <div className="productos-grid">
          {productosFiltrados.length === 0
            ? <p>No se encontraron productos.</p>
            : productosFiltrados.map((prod) => (
              <div key={prod.id} className="producto-card">
                <img src={`http://localhost:3001/uploads/productos/${prod.imagen}`} alt={prod.nombre} />
                <h4>{prod.nombre}</h4>
                <p className="categoria">{prod.categoria}</p>
                <p className="precio">S/ {prod.precio}</p>
                <button className="boton-agregar">AGREGAR</button>
              </div>
            ))
          }
        </div>
        <div className="indice">
          <button className="indicebtn">
            <span>&lt;</span>
          </button>
          <button className="indicebtn active">1</button>
          <button className="indicebtn">2</button>
          <button className="indicebtn">3</button>
          <span className="pag-dots">...</span>
          <button className="indicebtn">10</button>
          <button className="indicebtn">
            <span>&gt;</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductosxCategoria;
