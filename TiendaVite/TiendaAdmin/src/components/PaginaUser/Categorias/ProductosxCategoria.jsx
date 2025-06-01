function ProductosxCategoria() {
  const categorias = [
    "Frutas y verduras",
    "Carnes, aves y pescados",
    "Desayunos",
    "Lácteos y huevos",
    "Queso y fiambres",
    "Abarrotes",
    "Panadería",
    "Congelados"
  ];

  const productos = [
    { nombre: "Zanahoria", categoria: "Frutas y verduras", precio: "S/2.99 X KG", img: "../img/Zanahoria.png" },
    { nombre: "Papaya", categoria: "Frutas y verduras", precio: "S/5.99 X KG", img: "../imgC/Papaya.png" },
    { nombre: "Mix de frutas", categoria: "Frutas y verduras", precio: "S/5.69 x un", img: "../imgC/EFrutas.png" },
    { nombre: "Manzana", categoria: "Frutas y verduras", precio: "S/3.80 X KG", img: "../imgC/manzana verde.png" },
    { nombre: "Naranja", categoria: "Frutas y verduras", precio: "S/3.69 X KG", img: "../imgC/naranja.png" },
    { nombre: "Piña", categoria: "Frutas y verduras", precio: "S/2.79 X KG", img: "../imgC/piña.png" },
    { nombre: "Zanahoria", categoria: "Frutas y verduras", precio: "S/2.99 X KG", img: "../img/zanahoria.png" },
    { nombre: "Sandía", categoria: "Frutas y verduras", precio: "S/1.99 X KG", img: "../imgC/sandia.png" },
    { nombre: "Uvas", categoria: "Frutas y verduras", precio: "S/11.99 X KG", img: "../imgC/uva.png" },
    { nombre: "Pera", categoria: "Frutas y verduras", precio: "S/6.49 X KG", img: "../imgC/pera.png" },
    { nombre: "Manzana roja", categoria: "Frutas y verduras", precio: "S/8.79 X KG", img: "../imgC/manzana.png" },
    { nombre: "Pithaya", categoria: "Frutas y verduras", precio: "S/5.89 X KG", img: "../imgC/pitahaya.png" }
  ];

  return (
    <section className="contenedor-categorias-productos">
      <nav className="menu-lateral">
        <ul>
          {categorias.map((cat, idx) => (
            <li key={idx} className={idx === 0 ? "activo" : ""}>{cat}</li>
          ))}
        </ul>
      </nav>

      <div className="main-productos">
        <div className="productos-grid">
          {productos.map((prod, idx) => (
            <div key={idx} className="producto-card">
              <img src={prod.img} alt={prod.nombre} />
              <h4>{prod.nombre}</h4>
              <p className="categoria">{prod.categoria}</p>
              <p className="precio">{prod.precio}</p>
              <button className="boton-agregar">AGREGAR</button>
            </div>
          ))}
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

export default ProductosxCategoria