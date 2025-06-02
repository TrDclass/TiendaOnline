// src/components/Todo.jsx
function Todo({ cambiarVista }) {
  const secciones = [
    {
      alumno: "Alumno 1",
      funcionalidades: [
        { nombre: "Página Principal", vista: "principal" },
        { nombre: "Categorias", vista: "PxCategoria" },
        { nombre: "Detalle de producto (antes de agregar a carrito)", vista: "DesProducto" },
      ],
    },
    {
      alumno: "Alumno 2",
      funcionalidades: [
        { nombre: "Carrito de compras", vista: "carrito" },
        { nombre: "Checkout", vista: "checkout" },
        { nombre: "Checkout Metodos de Pago ", vista: "checkoutmetodopago" },
        { nombre: "Pago1", vista: "pago1" },
        { nombre: "Pago2", vista: "pago2" },
        { nombre: "Pedido completo (Gracias por compra)", vista: "pedidocompleto" },
      ],
    },
    {
      alumno: "Alumno 3",
      funcionalidades: [
        { nombre: "Login (y validación)", vista: "login" },
        { nombre: "Registro de usuario", vista: "registro" },
        { nombre: "Recuperación de Contraseña", vista: "recuperarcontraseña" },
        { nombre: "Listado de Órdenes (usuario)", vista: "orden-user" },
      ],
    },
    {
      alumno: "Alumno 4",
      funcionalidades: [
        { nombre: "Listado de Categorías (Admin)", vista: "categorias" },
        { nombre: "Detalle de orden (usuario)", vista: "detalle-orden" },
        { nombre: "Cambio de contrasena", vista: "Cambiocontrasena" },
      ],
    },
    {
      alumno: "Alumno 5",
      funcionalidades: [
        { nombre: "Dashboard Admin", vista: "dashboard" },
        { nombre: "Lista de Productos (Admin)", vista: "productos" },
        { nombre: "Agregar Producto (Admin)", vista: "agregar-producto" },
        { nombre: "Detalle y Editar Producto", vista: "detalle-producto" },
      ],
    },
    {
      alumno: "Alumno 6",
      funcionalidades: [
        { nombre: "Lista de Usuarios (Admin)", vista: "usuarios" },
        { nombre: "Detalle de Usuario (Admin)", vista: "detalle-usuario" },
        { nombre: "Lista de Órdenes (Admin)", vista: "ordenes" },
        { nombre: "Detalle de Orden (Admin)", vista: "detalle-orden" },
      ],
    },
  ]

  return (
    <div style={{ padding: '20px' }}>
      <h1>Todo - Navegación rápida</h1>
      {secciones.map((seccion, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <h2>{seccion.alumno}</h2>
          <ul>
            {seccion.funcionalidades.map((func, i) => (
              <li key={i} style={{ marginBottom: '5px' }}>
                {func.vista ? (
                  <button onClick={() => cambiarVista(func.vista)} style={{ cursor: 'pointer' }}>
                    {func.nombre}
                  </button>
                ) : (
                  <span style={{ color: 'gray' }}>{func.nombre} (no implementado)</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Todo
