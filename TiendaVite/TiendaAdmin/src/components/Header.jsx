function Header({ cambiarVista }) {
  return (
    <header className="header-superior">
      <div className="logo">
        Mi-Tiendita <span className="punto-rojo">●</span>
      </div>
      <div className="buscador">
        <input type="text" placeholder="Buscar un producto..." />
        <button>
          <img src="/img/icono.png" alt="Buscar" />
        </button>
      </div>
      <div className="acciones-superiores">
        <div className="usuario">
        <a onClick={() => cambiarVista('login')}>👤 Admin</a><br />
          <small>Panel de control</small>
        </div>
      </div>
    </header>
  )
}

export default Header