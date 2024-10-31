
export const Register = () => {
  
  return (
    <>
      <header className="content__header content__header--public">
        <h1 className="content__title">Registro</h1>
      </header>

      {/* Formulario de Registro*/}
      <div className="content__posts">
        <div className="form-style">


          <form className="register-form" onSubmit={''}>
            <div className="form-group">
              <label htmlFor="name">Nombres</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                onChange={''}
                value={""}
                autoComplete="given-name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="last_name">Apellidos</label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                required
                onChange={''}
                value={''}
                autoComplete="family-name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="nick">Nick</label>
              <input
                type="text"
                id="nick"
                name="nick"
                required
                onChange={''}
                value={''}
                autoComplete="username"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                onChange={''}
                value={''}
                autoComplete="email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="bio">Biografía</label>
              <input
                type="text"
                id="bio"
                name="bio"
                onChange={''}
                value={""}
                autoComplete="biografía"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                name="password"
                required
                onChange={''}
                value={''}
                autoComplete="new-password"
              />
            </div>

            <input
              type="submit"
              value="Regístrate"
              className="btn btn-success"
            />
          </form>
        </div>
      </div>
    </>
  )
}
