import { useState } from 'react'
import Header from './components/Header'
import NavbarAdmin from './components/NavbarAdmin'
import DashboardAdmin from './components/DashboardAdmin'
import ListaProductos from './components/ListaProductos'
import AgregarProducto from './components/AgregarProducto'
import DetalleProducto from './components/DetalleProducto'
import ListadoDeUsuarios from './components/ListadoDeUsuarios'
import ListadoDeOrdenes from './components/ListadoDeOrdenes'
import DetalleOrden from './components/DetalleOrden'
import DetalleUsuario from './components/DetalleUsuario'
import ListadoCategorias from './components/ListadoCategorias'
import Footer from './components/Footer'

function App() {
  const [vistaActual, setVistaActual] = useState('dashboard')

  const cambiarVista = (nuevaVista) => {
    setVistaActual(nuevaVista)
  }

  return (
    <>
      <Header />
      <NavbarAdmin cambiarVista={cambiarVista} />
      {vistaActual === 'dashboard' && <DashboardAdmin cambiarVista={cambiarVista} />}
      {vistaActual === 'productos' && <ListaProductos cambiarVista={cambiarVista} />}
      {vistaActual === 'agregar-producto' && <AgregarProducto cambiarVista={cambiarVista} />}
      {vistaActual === 'detalle-producto' && <DetalleProducto cambiarVista={cambiarVista} />}
      {vistaActual === 'usuarios' && <ListadoDeUsuarios cambiarVista={cambiarVista} />}
      {vistaActual === 'ordenes' && <ListadoDeOrdenes cambiarVista={cambiarVista} />}
      {vistaActual === 'categorias' && <ListadoCategorias cambiarVista={cambiarVista} />}
      {vistaActual === 'detalle-orden' && <DetalleOrden cambiarVista={cambiarVista} />}
      {vistaActual === 'detalle-usuario' && <DetalleUsuario cambiarVista={cambiarVista} />}
      <Footer/>
    </>
    
  )
}

export default App