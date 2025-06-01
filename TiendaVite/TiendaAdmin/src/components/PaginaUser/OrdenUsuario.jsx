import { useState } from 'react'

function ContenidoUsuario() {
  const ordenes = [
    { id: "#1234", usuario: "Simon The Digger", fecha: "20/01/2025", total: "S/199.00", estado: "Entregado" },
    { id: "#1234", usuario: "María Gonzales", fecha: "20/01/2025", total: "S/199.00", estado: "Por entregar" },
    { id: "#1234", usuario: "Marco Aurelio", fecha: "20/01/2025", total: "S/199.00", estado: "Entregado" },
    { id: "#1234", usuario: "Ana Días", fecha: "20/01/2025", total: "S/199.00", estado: "Entregado" },
    { id: "#1234", usuario: "Simon The Digger", fecha: "20/01/2025", total: "S/199.00", estado: "Entregado" },
    { id: "#1234", usuario: "María Gonzales", fecha: "20/01/2025", total: "S/199.00", estado: "Por entregar" },
    { id: "#1234", usuario: "Marco Aurelio", fecha: "20/01/2025", total: "S/199.00", estado: "Entregado" },
    { id: "#1234", usuario: "Ana Días", fecha: "20/01/2025", total: "S/199.00", estado: "Entregado" },
    { id: "#1234", usuario: "Simon The Digger", fecha: "20/01/2025", total: "S/199.00", estado: "Entregado" },
    { id: "#1234", usuario: "María Gonzales", fecha: "20/01/2025", total: "S/199.00", estado: "Por entregar" },
  ];

  return (
    <div className="contenido-usuario">
      <h1>Simon !</h1>
      <div className="info-datos">
        <div className="info-personal">
          <h3>Datos personales</h3>
          <p><strong>Nombre:</strong> Simon The Digger</p>
          <p><strong>Correo:</strong> <a href="https://www.google.com/search?sxsrf=AE3TifNA5sf10-eLeMZAINmp5r-xPdKYdg:1748549989903&q=Simon+The+Digger">Simon.Digger@gmail.com</a></p>
          <p><strong>Fecha de registro:</strong> 20/01/2025</p>
        </div>
        <div className="info-personal">
          <h3>Dirección de envío</h3>
          <p>Av la molina 12334</p>
          <p>Lima - Lima</p>
          <p>Celular de contacto: 990882131</p>
        </div>
        <div className="caja-orden">
          <div className="numero-orden">Órdenes<br />12</div>
          <div className="cuadro-monto">Monto ahorrado<br />S/129</div>
        </div>
        <div className="fotoperfil">
          <img src="/img/SimonTheDigger.webp" alt="Usuario" />
        </div>
      </div>

      <div className="parte-ordenes">
        <h2>Tus órdenes</h2>
        <input type="text" placeholder="Buscar una orden..." />
        <table>
          <thead>
            <tr>
              <th>#ORDEN</th>
              <th>Usuario</th>
              <th>Fecha de órden</th>
              <th>Total</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {ordenes.map((orden, i) => (
              <tr key={i}>
                <td className="id">{orden.id}</td>
                <td>{orden.usuario}</td>
                <td>{orden.fecha}</td>
                <td>{orden.total}</td>
                <td className={orden.estado === "Entregado" ? "entregado" : "porentregar"}>
                  {orden.estado}
                </td>
                <td><button className="btn-verdetalle">Ver detalle</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

  export default ContenidoUsuario

