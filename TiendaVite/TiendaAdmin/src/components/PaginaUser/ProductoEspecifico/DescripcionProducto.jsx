function DescripcionProducto() {
  return (
    <section className="descripcion-producto-main">
      <div className="breadcrumb">
        <span><b>Supermercado</b> &gt; <b>Frutas</b></span>
      </div>
        <div className="descripcion-producto-card">
            <div className="desc-prod-img">
            <img src="../imgC/palta.png" alt="Palta" />
            </div>
            <div className="desc-prod-info">
            <h2>Palta</h2>
            <hr />
            <h3>Presentación 0.6 kg</h3>
            <p className="desc-prod-text">
                El aguacate es el fruto del árbol del mismo nombre, de hoja perenne de la familia de las lauráceas. Con forma de pera, en su interior contiene una única semilla redondeada de color claro
            </p>
            <div className="desc-prod-bottom">
                <span className="desc-prod-precio">s/ 8.90 x kg</span>
                <button className="desc-prod-agregar">
                <span className="icon-cart" style={{marginRight: '8px'}}>🛒</span>
                AGREGAR
                </button>
            </div>
            </div>
      </div>
    </section>
  );
}

export default DescripcionProducto