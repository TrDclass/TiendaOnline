
import './Carrito.css';
import ProductoCard from "../../ProductoCard/ProductoCard";
const productosCarrito = [
  {
      id: 1,
      name: 'Pollo entero fresco con Menudencia',
      precio: 20.65,
      cantidad: 2,
      presentacion: '2.2 kg aprox',
      fecha_de_llegada: 'Llega mañana',
      img: "https://th.bing.com/th/id/R.f0725f805a10f017c2c33f6079d074ee?rik=jUUrZj82fQkVxw&riu=http%3a%2f%2fwww.ahorradoras.com%2fwp-content%2fuploads%2f2014%2f06%2fpollo.jpg&ehk=7z8l5WTKYYeUZ9KAsKXR6b%2b3jXUm13IFugR3O%2fQdx5I%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
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
  }
];

function Carrito({ cambiarVista }) {  return (
    <div className="contenedor-carrito">
      <div className="carrito-titulo">
    <h2>Carro </h2>
    <h3>({productosCarrito.length} Productos)</h3>
</div>


      {/* Contenedor general con productos a la izquierda y resumen a la derecha */}
      <div className="carrito-layout">
        {/* Contenedor de productos */}
        <div className="carrito-productos">
          {productosCarrito.map(producto => (
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

        {/* Resumen de compra */}
        <div className="resumen-compra">
        <h3>Resumen de Compra</h3>
        <div className="resumen-detalles">
        <p className="productos">Productos ({productosCarrito.length}) - <strong>S/119.00</strong></p>
        <p className="delivery">Delivery - <strong>GRATIS</strong></p>
        <p className="ddescuentos">Descuentos - <strong>-S/9.00</strong></p>
        <hr />
        <p className="total-pago">Total - <strong>S/100.00</strong></p>
        </div>
        <button className="btn-continuar">Continuar compra</button>
        </div>

      </div>
    </div>
  );
};

export default Carrito
