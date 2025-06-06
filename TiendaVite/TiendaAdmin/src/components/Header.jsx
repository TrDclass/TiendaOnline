import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const handleNavChange = (mode) => {
    if (mode === 'navadmin') {
      navigate('/admin'); // Redirige al dashboard de admin
    } else {
      navigate('/'); // Redirige a la página principal
    }
  };

  return (
    <header className="header-superior">
      {/* Logo que redirige a la página principal */}
      <Link to="/" className="logo">
        Mi-Tiendita <span className="punto-rojo">●</span>
      </Link>

      {/* Botón Todo */}
      <div className="btn-admin secundario">
        <Link to="/todo" className="btn-admin secundario">
          Todo
        </Link>
      </div>

      {/* Buscador (sin cambios, no afecta el routing) */}
      <div className="buscador">
        <input type="text" placeholder="Buscar un producto..." />
        <button>
          <img src="/img/icono.png" alt="Buscar" />
        </button>
      </div>

      {/* Botones de cambio de modo */}
      <div className="btn-admin verde">
        <button 
          className="btn-admin verde"
          onClick={() => handleNavChange('navuser')}
        >
          Modo Usuario
        </button>
      </div>
      
      <div className="btn-admin">
        <button 
          className="btn-admin"
          onClick={() => handleNavChange('navadmin')}
        >
          Modo Admin
        </button>
      </div>

      {/* Acciones superiores */}
      <div className="acciones-superiores">
        <div className="btn-carrito">
          <Link to="/carrito">🛒 Carrito <span>S/ 100.00</span></Link>
        </div>

        <div className="usuario">
          <Link to="/login">👤 Usuario</Link>
          <br />
          <small>
            <Link to="/registro">Registrar cuenta</Link>
          </small>
        </div>
      </div>
    </header>
  );
}

export default Header;