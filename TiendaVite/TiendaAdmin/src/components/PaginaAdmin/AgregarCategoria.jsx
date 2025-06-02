function AgregarCategoria() {
        const [nombre, setNombre] = React.useState('');
        const [descripcion, setDescripcion] = React.useState('');

        const handleSubmit = (e) => {
          e.preventDefault();
          if (!nombre.trim()) {
            alert('Debe ingresar un nombre para la categoría');
            return;
          }
          
          alert(`Categoría "${nombre}" guardada correctamente.`);
          setNombre('');
          setDescripcion('');
        };

        return (
          <main className="contenido-principal">
            <h2>Agregar Nueva Categoría</h2>
            <form onSubmit={handleSubmit} className="formulario-admin">
              <div className="grupo-formulario">
                <label>Nombre</label>
                <input
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Nombre de la categoría"
                />
              </div>
              <div className="grupo-formulario">
                <label>Descripción</label>
                <textarea
                  value={descripcion}
                  onChange={(e) => setDescripcion(e.target.value)}
                  placeholder="Descripción de la categoría"
                />
              </div>
              <div className="acciones-formulario">
                <button type="reset" className="btn-admin secundario" onClick={() => {
                  setNombre('');
                  setDescripcion('');
                }}>
                  Cancelar
                </button>
                <button type="submit" className="btn-admin verde">
                  Guardar Categoría
                </button>
              </div>
            </form>
          </main>
        );
      }

      export default AgregarCategoria