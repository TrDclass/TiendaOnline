function Categorias() {
        const categorias = [
      { nombre: "Frutas y verduras", img: "../img/Platano.png" },
      { nombre: "Carnes, aves y pescado", img: "../img/Carne.png" },
      { nombre: "Abarrotes", img: "../img/Arroz.png" },
      { nombre: "Limpieza", img: "../img/Sapolio.png" }
      ];

      return (
      <section>
        <h5>Explora las categorías</h5>
        <div className="recomendadoscategoria">
          <button className="flechaizquierda2">&lt;</button>  
          <div className="ContainerCategoria">
            {categorias.map((cat, index) => (
              <div key={index} className="categorias">
                <img src={cat.img} alt={cat.nombre} />
                <p>{cat.nombre}</p>
              </div>
          ))}
          </div>
          <button className="flechaderecha2">&gt;</button>
        </div>
      </section>
    );
}


export default Categorias