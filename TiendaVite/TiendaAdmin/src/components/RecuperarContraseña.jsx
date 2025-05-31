import { useState } from 'react'
function Recuperarcontraseña(){
    return (
        <main className="contenido-recuperarr">
          <form className="form-registroo">
            <h2>Olvidé mi contraseña</h2>
              <article>
                  <p>Se enviará un enlace a tu correo electrónico para que puedas validar tu
                    identidad y restablecer tu contraseña.</p>
                  <p>Por favor, asegúrate de revisar tu bandeja de entrada y la carpeta de spam.</p>
              </article>  
          <div className="campo-correoo">
            <label>
              Correo
              <input type="email" name="correo" placeholder="usuario@gmail.com" required />
            </label>
          </div>
            <div className="btn-contenerr">
            <button type="submit" className="btn-recuperarr">Recuperar contraseña</button>
            </div>
          </form>  
        </main>
  
    );
  }

  export default Recuperarcontraseña