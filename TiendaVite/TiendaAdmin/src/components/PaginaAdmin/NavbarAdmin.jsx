function NavbarAdmin({ cambiarVista }) {
  return (
    <nav className="barra-navegacion">
      <ul>
        <li><a onClick={() => cambiarVista('dashboard')}>Dashboard</a></li>
        <li><a onClick={() => cambiarVista('productos')}>Productos</a></li>
        <li><a onClick={() => cambiarVista('usuarios')}>Usuarios</a></li>
        <li><a onClick={() => cambiarVista('ordenes')}>Órdenes</a></li>
        <li><a onClick={() => cambiarVista('categorias')}>Categorías</a></li>
      </ul>
      <div className="ofertas">ADMINISTRADOR</div>
    </nav>
  )
}

export default NavbarAdmin