import { useEffect, useState } from 'react';
import productoApi from '../../api/productoApi';
import personaUsuariaAPI from '../../api/personaUsuariaAPI';

function ListadoDeOrdenes({ cambiarVista }) {
  const [filtro, setFiltro] = useState('');
  const [ordenes, setOrdenes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cargarOrdenes = async () => {
      try {
        const usuarios = await personaUsuariaAPI.findAll();
        const productos = await productoApi.findAll();

        if (!productos || productos.length === 0) {
          throw new Error('No hay productos disponibles para calcular los totales.');
        }

        const ordenesGeneradas = usuarios.map((usuario) => {
          // Elegir un producto aleatorio para asignar el total
          const productoRandom = productos[Math.floor(Math.random() * productos.length)];

          return {
            id: usuario.id,
            usuario: usuario.nombre,
            fecha: usuario.fecha,
            total: `S/ ${productoRandom.precio.toFixed(2)}`,
            estado: usuario.estado === 'Activo' ? 'Entregado' : 'Por entregar',
          };
        });

        setOrdenes(ordenesGeneradas);
      } catch (err) {
        console.error(err);
        setError('Error al cargar los datos.');
      } finally {
        setLoading(false);
      }
    };

    cargarOrdenes();
  }, []);

  const ordenesFiltradas = ordenes.filter((orden) =>
    orden.usuario.toLowerCase().includes(filtro.toLowerCase())
  );

  if (loading) return <main className="usuario-detalle">Cargando órdenes...</main>;
  if (error) return <main className="usuario-detalle">Error: {error}</main>;

  return (
    <main className="usuario-detalle">
      <h2>Listado de órdenes</h2>
      <div className="buscador-usuarios">
        <input
          type="text"
          placeholder="Buscar una órden..."
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        />
        <button>Buscar</button>
      </div>
      <table className="tabla-admin">
        <thead>
          <tr>
            <th>#ORDEN</th>
            <th>Usuario</th>
            <th>Fecha de órden</th>
            <th>Total</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {ordenesFiltradas.length === 0 ? (
            <tr>
              <td colSpan="6" style={{ textAlign: 'center', padding: '20px' }}>
                No se encontraron órdenes.
              </td>
            </tr>
          ) : (
            ordenesFiltradas.map((orden) => (
              <tr key={orden.id}>
                <td className="orden-id">#{orden.id}</td>
                <td>{orden.usuario}</td>
                <td>{orden.fecha}</td>
                <td>{orden.total}</td>
                <td
                  className={
                    orden.estado === 'Entregado'
                      ? 'estado-entregado'
                      : 'estado-pendiente'
                  }
                >
                  {orden.estado}
                </td>
                <td>
                  <button
                    className="btn-admin"
                    onClick={() => cambiarVista('detalle-orden')}
                  >
                    Ver detalle
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </main>
  );
}

export default ListadoDeOrdenes;
