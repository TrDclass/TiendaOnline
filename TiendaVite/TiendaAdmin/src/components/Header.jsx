function Header({ cambiarVista, navegador }) {
  return (
    <header className="header-superior">
      <div className="logo" onClick={() => cambiarVista('principal')}>
        Mi-Tiendita <span className="punto-rojo">●</span>
      </div>
      <div className="btn-admin secundario">
        <button className="btn-admin secundario" onClick={() => cambiarVista('todo')}>
          Todo
        </button>
      </div>
      <div className="buscador">
        <input type="text" placeholder="Buscar un producto..." />
        <button>
          <img src="/img/icono.png" alt="Buscar" />
        </button>
      </div>
      <div className="btn-admin verde">
        <button className="btn-admin verde" onClick={() => navegador('navuser')}>
          Modo Usuario
        </button>
      </div>
      <div className="btn-admin">
        <button className="btn-admin" onClick={() => navegador('navadmin')}>
          Modo Admin
        </button>
      </div>
      <div className="acciones-superiores">
        <button className="btn-carrito">
          🛒 Carrito <span>S/ 100.00</span>
        </button>
        <div className="usuario">
          <a onClick={() => cambiarVista('login')}>👤 Usuario</a><br />
          <small>Registrar cuenta</small>
        </div>
      </div>
    </header>
  )
}

export default Header