import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function NavbarUser() {
  const location = useLocation();

  return (
    <nav className="barra-navegacion">
      <ul>
        <li>
          <NavLink 
            to="/categorias/1" 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            ☰ Categorías
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/productos" 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            Productos
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/nosotros" 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            Nosotros
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/checkout" 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            Checkout
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/checkout/metodo-pago" 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            Método De Pago
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/checkout/metodo-pago/pago-1" 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            Pago1
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/checkout/metodo-pago/pago-2" 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            Pago2
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/pedido-completo" 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            Pedido Completo
          </NavLink>
        </li>
      </ul>
      <div className="ofertas">Ofertas 👋</div>
    </nav>
  );
}

export default NavbarUser;