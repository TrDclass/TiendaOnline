function MasVendidos1() {
  const productos = [
    { nombre: "Uvas", categoria: "Frutas y verduras", precio: "S/11.99 X KG", img: "../imgC/Uva.png" },
    { nombre: "Pera", categoria: "Frutas y verduras", precio: "S/6.49 X KG", img: "../imgC/Pera.png" },
    { nombre: "Manzana rojas", categoria: "Frutas y verduras", precio: "S/8.79 X KG", img: "../imgC/Manzana.png" },
    { nombre: "Pitahaya", categoria: "Frutas y verduras", precio: "S/5.89 X KG", img: "../imgC/Pitahaya.png" },
    { nombre: "Sandía", categoria: "Frutas y verduras", precio: "S/1.99 X KG", img: "../imgC/Sandia.png" },
  ];

  return (
    <section>
      <h5>Productos similares</h5>
      <div className="ProductosSimilares1">
        <button className="flechaizquierda2">&lt;</button>
        <div className="ContainerProductos1">
          {productos.map((prod, i) => (
            <div key={i} className="producto-card1">
              <img src={prod.img} alt={prod.nombre} />
              <h4>{prod.nombre}</h4>
              <p className="categoria">{prod.categoria}</p>
              <p className="precio">{prod.precio}</p>
              <button className="botonagregar">AGREGAR</button>
            </div>
          ))}
        </div>
        <button className="flechaderecha2">&gt;</button>
      </div>
    </section>
  );
}

export default MasVendidos1