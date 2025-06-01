import { useState } from 'react'
function Login({ cambiarVista }) {
    return (
      <main className="contenido-login">
        <h2>Iniciar sesión</h2>
        <form className="form-login">
          <label>
            Correo
            <input
              type="email"
              name="correo"
              placeholder="usuario@gmail.com"
              required
            />
          </label>
  
          <label>
            Contraseña
            <div className="campo-password">
              <input
                type="password"
                name="contrasena"
                placeholder="Contraseña"
                required
              />
              <span className="icono-ojo">👁️</span>
            </div>
          </label>
  
          <button type="submit" className="btn-principal">
            Iniciar sesión
          </button>
  
          <div className="acciones-secundarias">
            <a href="#" onClick={() => cambiarVista('registro')}>Registrarme</a>
            <a href="#" onClick={() => cambiarVista('recuperarcontraseña')}> 
              Olvidé mi contraseña
            </a>
          </div>
        </form>
      </main>
    );
  }

  export default Login