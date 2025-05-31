import { useState } from 'react'
function Registro() {
    return (
      <main className="contenido-registro">
        <h2>Registro</h2>
        <form className="form-registro">
          <div className="fila-campos">
            <label>
              Nombre
              <input type="text" name="nombre" placeholder="Nombre del usuario" required />
            </label>
            <label>
              Apellido
              <input type="text" name="apellido" placeholder="Apellido del usuario" required />
            </label>
          </div>
  
          <div className="fila-campos">
            <label>
              Correo
              <input type="email" name="correo" placeholder="usuario@gmail.com" required />
            </label>
            <label>
              DNI
              <input type="text" name="dni" placeholder="DNI" required />
            </label>
          </div>
  
          <div className="fila-campos">
            <label>
              Contraseña
              <div className="campo-password">
                <input type="password" name="contrasena" placeholder="Contraseña" required />
              </div>
            </label>
            <label>
              Confirmar contraseña
              <div className="campo-password">
                <input type="password" name="confirmar" placeholder="Contraseña" required />
              </div>
            </label>
          </div>
  
          <div className="btn-contenedor">
            <button type="submit" className="btn-registro">Registrarme</button>
          </div>
        </form>
      </main>
    );
  }

  export default Registro