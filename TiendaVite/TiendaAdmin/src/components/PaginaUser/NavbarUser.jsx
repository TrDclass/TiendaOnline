function NavbarUser({ cambiarVista }) {
  return (
    <nav className="barra-navegacion">
      <ul>
        <li><a onClick={() => cambiarVista('categorias')}> ☰ Categorías</a></li>
        <li><a onClick={() => cambiarVista('productos')}>Productos</a></li>
        <li><a onClick={() => cambiarVista('nosotros')}>Nostros</a></li>
      </ul>
      <div className="ofertas">Ofertas 👋</div>
    </nav>
  )
}

export default NavbarUser