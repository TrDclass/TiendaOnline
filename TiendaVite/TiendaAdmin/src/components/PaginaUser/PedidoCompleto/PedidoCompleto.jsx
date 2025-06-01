import "./PedidoCompleto.css";
import ProductoCard from "../../ProductoCard/ProductoCard";

const productosPedido = [
  {
    id: 1,
    name: "Pollo entero fresco con Menudencia",
    precio: 20.65,
    cantidad: 2,
    presentacion: "2.2 kg aprox",
    fecha_de_llegada: "Llega mañana",
    img: "https://th.bing.com/th/id/R.f0725f805a10f017c2c33f6079d074ee?rik=jUUrZj82fQkVxw&riu=http%3a%2f%2fwww.ahorradoras.com%2fwp-content%2fuploads%2f2014%2f06%2fpollo.jpg&ehk=7z8l5WTKYYeUZ9KAsKXR6b%2b3jXUm13IFugR3O%2fQdx5I%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
  },
  {
      id: 2,
      name: 'Leche Gloria',
      precio: 22.65,
      cantidad: 1,
      presentacion: '6 unidades',
      fecha_de_llegada: 'Llega mañana',
      img: "https://mercadolia.com/wp-content/uploads/2022/04/gloria-azul400.png"
  },
  {
    id: 3,
    name: "Huevos Pardos LA CALERA Paquete 30un",
    precio: 22.00,
    cantidad: 1,
    presentacion: "30 unidades",
    fecha_de_llegada: "Llega mañana",
    img: "https://plazavea.vteximg.com.br/arquivos/ids/29018245-450-450/20138032.jpg?v=638500304841930000"
  },
  {
    id: 4,
    name: "Garbanzo costeño",
    precio: 10.65,
    cantidad: 1,
    presentacion: "1 kg aprox",
    fecha_de_llegada: "Llega mañana",
    img: "https://th.bing.com/th/id/OIP.AccEdN3uva6RqBMzAqWYXwHaHa?rs=1&pid=ImgDetMain",
  },
];

function PedidoCompleto({ cambiarVista }){
  const subtotal = productosPedido.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );
  const discount = 9.0;
  const total = subtotal - discount;

  return (
    <div className="contenedor-pedido">
      <h2>Pedido Completo</h2>
      <h3>¡Gracias por tu compra!</h3>

      <div className="pedido-layout">
        {/* Lista de productos del pedido */}
        <div className="pedido-productos">
          {productosPedido.map((producto) => (
            <ProductoCard
              key={producto.id}
              id={producto.id}
              name={producto.name}
              precio={producto.precio}
              cantidad={producto.cantidad}
              presentacion={producto.presentacion}
              fecha_de_llegada={producto.fecha_de_llegada}
              img={producto.img}
            />
          ))}
        </div>

        {/* Sección derecha con resumen, dirección de envío y ofertas */}
        <div className="pedido-derecha">
          {/* Resumen del pedido */}
          <div className="resumen-pedido">
            <h3>Resumen de Pedido</h3>
            <p>
              Productos ({productosPedido.length}) - <strong>S/ {subtotal.toFixed(2)}</strong>
            </p>
            <p>Delivery - <strong>GRATIS</strong></p>
            <p>Descuentos - <strong>-S/ {discount.toFixed(2)}</strong></p>
            <hr />
            <p className="total">
              Total - <strong>S/ {total.toFixed(2)}</strong>
            </p>
          </div>

          {/* Dirección de envío con imagen al lado */}
          <div className="direccion-envio">
            <div className="direccion-texto">
              <h3 >Dirección de envío</h3>
              <p>Av La Molina 12334</p>
              <p>Lima - Lima</p>
              <p>Celular de contacto: 990892131</p>
                <div className="fecha-entrega-line">
                <span>Fecha de entrega aproximada:</span>
                <span className="fecha-entrega">04/05/2025</span>
                </div>
           
            </div>
            <div className="direccion-imagen">
              <img src="https://yata-apix-02783514-9f5c-46f6-bb64-e0a3dd513811.s3-object.locaweb.com.br/4239e155cf10438f8db6cfcd7f05e26a.png" alt="Dirección de envío" />
            </div>
          </div>

          {/* Botón de ofertas */}
          <button className="btn-ver-ofertas">Ver más ofertas</button>
        </div>
      </div>
    </div>
  );
};

export default PedidoCompleto;
