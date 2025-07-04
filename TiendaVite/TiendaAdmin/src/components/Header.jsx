import { useNavigate } from 'react-router-dom';

function Header({ setIsAdminMode }) {
  const navigate = useNavigate();

  const handleAdminMode = () => {
    setIsAdminMode(true);
    navigate('/admin');
  };

  const handleUserMode = () => {
    setIsAdminMode(false);
    navigate('/');
  };

  return (
    <header className="header-superior">
      <div className="logo" onClick={() => navigate('/')}>
        Mi-Tiendita <span className="punto-rojo">●</span>
      </div>
      <div className="btn-admin secundario" onClick={() => navigate('/todo')}>
        <button className="btn-admin secundario">
          Todo
        </button>
      </div>
      <div className="buscador">
        <input type="text" placeholder="Buscar un producto..." />
        <button>
          <img src="/img/icono.png" alt="Buscar" />
        </button>
      </div>
      <div className="btn-admin verde" onClick={handleUserMode}>
        <button className="btn-admin verde">
          Modo Usuario
        </button>
      </div>
      <div className="btn-admin" onClick={handleAdminMode}>
        <button className="btn-admin">
          Modo Admin
        </button>
      </div>
      <div className="acciones-superiores">
        <div className="btn-carrito">
          <button onClick={() => navigate('/carrito')}>🛒 Carrito <span>S/ 100.00</span></button>
        </div>

        <div className="usuario">
          <button onClick={() => navigate('/login')}>👤 Usuario</button>
          <small onClick={() => navigate('/registro')}>Registrar cuenta</small>
        </div>
      </div>
    </header>
  );
}

export default Header;