import { useState } from 'react'
import Header from './components/Header'
import NavbarAdmin from './components/PaginaAdmin/NavbarAdmin'
import DashboardAdmin from './components/PaginaAdmin/DashboardAdmin'
import ListaProductos from './components/PaginaAdmin/ListaProductos'
import AgregarProducto from './components/PaginaAdmin/AgregarProducto'
import DetalleProducto from './components/PaginaAdmin/DetalleProducto'
import ListadoDeUsuarios from './components/PaginaAdmin/ListadoDeUsuarios'
import ListadoDeOrdenes from './components/PaginaAdmin/ListadoDeOrdenes'
import DetalleOrden from './components/PaginaAdmin/DetalleOrden'
import DetalleUsuario from './components/PaginaAdmin/DetalleUsuario'
import ListadoCategorias from './components/PaginaAdmin/ListadoCategorias'
import Footer from './components/Footer'
import PaginaPrincipal from './components/PaginaUser/PaginaPrincipal'
import Login from './components/PaginaUser/Login'
import Registro from './components/PaginaUser/Registro'
import Recuperarcontraseña from './components/PaginaUser/RecuperarContraseña'
import NavbarUser from './components/PaginaUser/NavbarUser'
import Todo from './Todo'
function App() {
  const [vistaActual, setVistaActual] = useState('principal')
  const [vistaNav, setvistaNav] = useState('navuser')

  const cambiarVista = (nuevaVista) => {
    setVistaActual(nuevaVista)
  }
   const navegador= (nuevaNav) => {
    setvistaNav(nuevaNav)
  }
  

  return (
    <>
      <Header cambiarVista={cambiarVista} navegador={navegador} />
      {vistaNav === 'navadmin' &&<NavbarAdmin cambiarVista={cambiarVista} />}
      {vistaNav === 'navuser' && <NavbarUser cambiarVista={cambiarVista} />}
      {vistaActual === 'todo' && <Todo cambiarVista={cambiarVista} />}
      {vistaActual === 'principal' && <PaginaPrincipal cambiarVista={cambiarVista} />}
      {vistaActual === 'dashboard' && <DashboardAdmin cambiarVista={cambiarVista} />}
      {vistaActual === 'productos' && <ListaProductos cambiarVista={cambiarVista} />}
      {vistaActual === 'agregar-producto' && <AgregarProducto cambiarVista={cambiarVista} />}
      {vistaActual === 'detalle-producto' && <DetalleProducto cambiarVista={cambiarVista} />}
      {vistaActual === 'usuarios' && <ListadoDeUsuarios cambiarVista={cambiarVista} />}
      {vistaActual === 'ordenes' && <ListadoDeOrdenes cambiarVista={cambiarVista} />}
      {vistaActual === 'categorias' && <ListadoCategorias cambiarVista={cambiarVista} />}
      {vistaActual === 'detalle-orden' && <DetalleOrden cambiarVista={cambiarVista} />}
      {vistaActual === 'detalle-usuario' && <DetalleUsuario cambiarVista={cambiarVista} />}
      {vistaActual === 'login' && <Login cambiarVista={cambiarVista} />}
      {vistaActual === 'registro' && <Registro cambiarVista={cambiarVista} />}
      {vistaActual === 'recuperarcontraseña' && <Recuperarcontraseña cambiarVista={cambiarVista} />}
      {vistaActual === 'recuperarcontraseña' && <Recuperarcontraseña cambiarVista={cambiarVista} />}
      <Footer/>
    </>
    
  )
}

export default App