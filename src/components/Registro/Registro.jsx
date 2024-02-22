import './Registro.css'

const Registro = () => {
  return (
    <div>
        <form>
            <div>
                <lebel> Nombre </lebel>
                <imput type="text" name="" placeholder="Ingresa tu nombre"> Nombre </imput>
            </div>
            <div>
                <lebel> Email </lebel>
                <imput type="text" name="Email" placeholder="Ingresa tu Email"> Email </imput>
            </div>
            <div>
                <lebel> Contraseña </lebel>
                <imput type="number" name="Contraseña" placeholder="Ingresa tu Contraseña"> Contraseña </imput>
            </div>
            <div>
                <button type='submit'> Crear cuenta </button>
            </div>
            <div>
                <p> ¿Ya tenes cuenta? </p> <a href='/login'> Iniciar sesión </a>
            </div>
        </form>
    </div>
  )
}

export default Registro