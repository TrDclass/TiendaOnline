import { useNavigate, Link } from 'react-router-dom';

function DashboardAdmin() {
  const navigate = useNavigate();

  return (
    <div className="admin-container">
      <h1>Dashboard Administrativo</h1>

      <div className="filtro-fecha">
        <span>Mostrar datos desde:</span>
        <input type="date" />
        <span>hasta:</span>
        <input type="date" />
        <button className="btn-admin">Aplicar</button>
      </div>

      <div className="tarjetas-dashboard">
        <div className="tarjeta-dashboard">
          <h2>Ventas totales</h2>
          <div className="valor">S/ 12,450.00</div>
        </div>
        <div className="tarjeta-dashboard">
          <h2>Órdenes completadas</h2>
          <div className="valor">87</div>
        </div>
        <div className="tarjeta-dashboard">
          <h2>Usuarios nuevos</h2>
          <div className="valor">23</div>
        </div>
        <div className="tarjeta-dashboard">
          <h2>Productos vendidos</h2>
          <div className="valor">156</div>
        </div>
      </div>

      <div className="seccion-usuarios">
        <div className="encabezado-seccion">
          <h2>Usuarios Registrados</h2>
          <button 
            className="btn-ver-todos" 
            onClick={() => navigate('/admin/usuarios')}
          >
            Ver todos
          </button>
        </div>

        <table className="tabla-admin">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Fecha Registro</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#001</td>
              <td>Juan Pérez</td>
              <td>juan.perez@example.com</td>
              <td>15/05/2025</td>
              <td className="estado-activo">Activo</td>
              <td>
                <button className="btn-admin secundario">Desactivar</button>
                <button 
                  className="btn-admin" 
                  onClick={() => navigate('/admin/usuario/001')}
                >
                  Ver Detalle
                </button>
              </td>
            </tr>
            <tr>
              <td>#002</td>
              <td>María Gómez</td>
              <td>maria.gomez@example.com</td>
              <td>10/05/2025</td>
              <td className="estado-activo">Activo</td>
              <td>
                <button className="btn-admin secundario">Desactivar</button>
                <button 
                  className="btn-admin" 
                  onClick={() => navigate('/admin/usuario/002')}
                >
                  Ver Detalle
                </button>
              </td>
            </tr>
            <tr>
              <td>#003</td>
              <td>Carlos Ruiz</td>
              <td>carlos.ruiz@example.com</td>
              <td>05/05/2025</td>
              <td className="estado-inactivo">Inactivo</td>
              <td>
                <button className="btn-admin verde">Activar</button>
                <button 
                  className="btn-admin" 
                  onClick={() => navigate('/admin/usuario/003')}
                >
                  Ver Detalle
                </button>
              </td>
            </tr>
            <tr>
              <td>#004</td>
              <td>Ana López</td>
              <td>ana.lopez@example.com</td>
              <td>01/05/2025</td>
              <td className="estado-activo">Activo</td>
              <td>
                <button className="btn-admin secundario">Desactivar</button>
                <button 
                  className="btn-admin" 
                  onClick={() => navigate('/admin/usuario/004')}
                >
                  Ver Detalle
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="encabezado-seccion">
        <h2>Órdenes Recientes</h2>
        <button 
          className="btn-ver-todos" 
          onClick={() => navigate('/admin/ordenes')}
        >
          Ver todos
        </button>
      </div>
      <table className="tabla-admin">
        <thead>
          <tr>
            <th>#ID</th>
            <th>Cliente</th>
            <th>Fecha</th>
            <th>Total</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Link to="/admin/orden/1256" style={{textDecoration: 'none', color: 'inherit'}}>
                #1256
              </Link>
            </td>
            <td>Juan Pérez</td>
            <td>20/05/2025</td>
            <td>S/ 199.00</td>
            <td className="estado-activo">Completado</td>
            <td>
              <button 
                className="btn-admin" 
                onClick={() => navigate('/admin/orden/1256')}
              >
                Ver
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/admin/orden/1255" style={{textDecoration: 'none', color: 'inherit'}}>
                #1255
              </Link>
            </td>
            <td>María Gómez</td>
            <td>20/05/2025</td>
            <td>S/ 245.00</td>
            <td className="estado-activo">Completado</td>
            <td>
              <button 
                className="btn-admin" 
                onClick={() => navigate('/admin/orden/1255')}
              >
                Ver
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/admin/orden/1254" style={{textDecoration: 'none', color: 'inherit'}}>
                #1254
              </Link>
            </td>
            <td>Carlos Ruiz</td>
            <td>19/05/2025</td>
            <td>S/ 120.00</td>
            <td className="estado-inactivo">Cancelado</td>
            <td>
              <button 
                className="btn-admin" 
                onClick={() => navigate('/admin/orden/1254')}
              >
                Ver
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DashboardAdmin;