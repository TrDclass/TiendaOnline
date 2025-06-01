
function MasVendidos() {
  const productos = [
    { nombre: "Pollo Entero Fresco con Menudencia", categoria: "Carnes, aves y pescado", precio: "S/9.40 X KG", img: "../img/Pollo.png" },
    { nombre: "Zanahoria", categoria: "Frutas y verduras", precio: "S/2.99 X KG", img: "../img/Zanahoria.png" },
    { nombre: "Azucar rubia BELL'S", categoria: "Abarrotes", precio: "S/8.99 un", img: "../img/Azucar.png" },
    { nombre: "Avena QUAKER tradicional", categoria: "Abarrotes", precio: "S/12.80 un", img: "../img/Quaker.png" },
    { nombre: "Cafe instantaneo ALTOMAYO", categoria: "Abarrotes", precio: "S/35 un", img: "../img/Cafe.png" },
  ];

  return (
    <section>
      <h5>Lo más vendido</h5>
      <div className="masvendidos">
        <button className="flechaizquierda2">&lt;</button>
        <div className="ContainerProductos">
          {productos.map((prod, i) => (
            <div key={i} className="producto-card">
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
 

export default MasVendidos