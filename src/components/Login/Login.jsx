import './Login.css'

const Login = () => {
  return (
    <div>
        <div>
                <lebel> Email </lebel>
                <imput type="text" name="Email" placeholder="Ingresa tu Email"> Email </imput>
            </div>
            <div>
                <lebel> Contraseña </lebel>
                <imput type="number" name="Contraseña" placeholder="Ingresa tu Contraseña"> Contraseña </imput>
            </div>
            <div>
                <button type='submit'> Iniciar sesion </button>
            </div>
            <div>
                <p> ¿No tenes cuenta? </p> <a href='/registro'> Registrate </a>
            </div>
    </div>
  )
}

export default Login