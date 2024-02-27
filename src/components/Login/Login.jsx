// Importaciones
import { useState } from 'react';
import './Login.css';

// Lógica del login
const Login = () => {
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');

  const manejarCorreoElectronico = (event) => {
    setEmail(event.target.value);
  };

  const manejarContraseña = (event) => {
    setContraseña(event.target.value);
  };

  const manejarInicioDeSesion = (event) => {
    event.preventDefault();
    console.log('email', email);
    console.log('contraseña', contraseña);
  };

  return (
    <div>
      <form onSubmit={manejarInicioDeSesion}>
        <div>
          <label htmlFor='email'>Email</label>
          <input type='text' id='email' value={email} onChange={manejarCorreoElectronico} required />
        </div>
        <div>
          <label htmlFor='contraseña'>Contraseña</label>
          <input type='password' id='contraseña' value={contraseña} onChange={manejarContraseña} required />
        </div>
        <button type='submit'>Iniciar sesión</button>
        <p> ¿No tienes cuenta? <a href='../Registro/Registro.jsx'> Regístrate </a></p>

      </form>
    </div>
  );
};

export default Login;