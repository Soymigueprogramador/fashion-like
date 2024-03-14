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
    <div className='login-container'>
      <div className='banner-login'>
        <img src="../../assets/image/logo.png" alt="logo" />
    </div>
      <form className='form-login' onSubmit={manejarInicioDeSesion}>
        <h2>Inicia sesion con tu cuenta</h2>
        <div className='email'>
          <label htmlFor='email'>Email:</label>
          <input type='text' id='email' value={email} onChange={manejarCorreoElectronico} required placeholder='Ingresa tu email' />
        </div>
        <div className='password'>
          <label htmlFor='contraseña'>Contraseña:</label>
          <input type='password' id='contraseña' value={contraseña} onChange={manejarContraseña} required placeholder='Ingresa tu contraseña' />
        </div>
        <div className='bottom-login'>
          <button type='submit'>Iniciar sesión</button>
          <p> ¿No tienes cuenta? <a href='../Registro/Registro.jsx'> Regístrate </a></p>
        </div>
      </form>
    </div>
  );
};

export default Login;