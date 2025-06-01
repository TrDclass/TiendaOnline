function NavbarUser({ cambiarVista }) {
  return (
    <nav className="barra-navegacion">
      <ul>
        <li><a onClick={() => cambiarVista('PxCategoria')}> ☰ Categorías</a></li>
        <li><a onClick={() => cambiarVista('productos')}>Productos</a></li>
        <li><a onClick={() => cambiarVista('nosotros')}>Nosotros</a></li>
        <li><a onClick={() => cambiarVista('carrito')}>Carrito</a></li>
        <li><a onClick={() => cambiarVista('checkout')}>Checkout</a></li>
        <li><a onClick={() => cambiarVista('checkoutmetodopago')}>Metodo De Pago</a></li>
        <li><a onClick={() => cambiarVista('pago1')}>Pago1</a></li>
        <li><a onClick={() => cambiarVista('pago2')}>Pago2</a></li>
        <li><a onClick={() => cambiarVista('pedidocompleto')}>Pedido Completo</a></li>

      </ul>
      <div className="ofertas">Ofertas 👋</div>
    </nav>
  )
}

export default NavbarUser