import "./Checkout.css";

function Checkout({ cambiarVista }){
  return (
    <div className="contenedor-checkout">
      <div className="checkout-titulo">
        <h1>Checkout</h1>
      </div>
      <div className="checkout-layout">
        {/* Formulario de Dirección de Envío */}
        <div className="checkout-form">
          <h2>Dirección de envío</h2>
          <form>
            <div className="form-group">
              <label>Nombre</label>
              <input type="text" placeholder="Ingresa tu nombre" required />
            </div>
            <div className="form-group">
              <label>Apellido</label>
              <input type="text" placeholder="Ingresa tu apellido" required />
            </div>
            <div className="form-group">
              <label>Ciudad</label>
              <input type="text" placeholder="Ingresa tu ciudad" required />
            </div>
            <div className="form-group">
              <label>Departamento</label>
              <input type="text" placeholder="Ingresa tu departamento" required />
            </div>
            <div className="form-group">
              <label>Dirección</label>
              <input type="text" placeholder="Ingresa tu dirección" required />
            </div>
            <div className="form-group">
              <label>Código postal</label>
              <input type="text" placeholder="Ingresa tu código postal" required />
            </div>
            <div className="form-group">
              <label>Teléfono de contacto</label>
              <input type="text" placeholder="Ingresa tu teléfono" required />
            </div>
          </form>
        </div>

        {/* Resumen de la Compra */}
        <div className="checkout-resumen">
          <h2>Resumen de compra</h2>
          <div className="resumen-detalles">
            <p className="productos">
              Productos (10) - <strong>S/119.00</strong>
            </p>
            <p className="delivery">
              Delivery - <strong>GRATIS</strong>
            </p>
            <p className="descuentos">
              Descuentos - <strong>-S/9.00</strong>
            </p>
            <hr />
            <p className="total-pago">
              Total - <strong>S/100.00</strong>
            </p>
          </div>
          <button className="btn-pago">Seleccionar método de pago</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
