
export const Login = () => {
  return (
    <>
      <header className="content__header content__header--public">
        <h1 className="content__title">Login</h1>
      </header>

      {/* Formulario de Login*/}
      <div className="content__posts">
        <div className="form-style">


          <form className="form-login" >
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={''}
                onChange={''}
                autoComplete="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                name="password"
                required
                value={''}
                onChange={''}
                autoComplete="current-password"
              />
            </div>

            <input
              type="submit"
              value="Identifícate"
              className="btn btn-success"
            />
          </form>
        </div>
      </div>
    </>
  )
}
