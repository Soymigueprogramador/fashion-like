// Importaciones
import './Registro.css';
/* import '../Login/Login.css'; */
import { useState } from 'react';

// Lógica del formulario de registro
const Registro = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');

  const manejoDeEnvios = (evento) => {
    evento.preventDefault();
    console.log(nombre);
    console.log(email);
    console.log(contraseña);
  };

  return (
    // Estructura del formulario de registro
    <div className='register-container'>
      <div className='banner-register'>
        <img src="../src/assets/image/logo.png" alt="logo" />
      </div>
      <form className='form-register' onSubmit={manejoDeEnvios}>
      <h2>Ingresa los siguientes para crear tu cuenta</h2>
        <div className='name-register'>
          <label className='test' htmlFor='nombre'>Nombre:</label>
          <input type='text' id='nombre' value={nombre} onChange={(e) => setNombre(e.target.value)} required placeholder='Ingresa tu nombre' />
        </div>
        <div className='email-register'>
          <label htmlFor='email'>Email:</label>
          <input type='text' id='email' value={email} onChange={(e) => setEmail(e.target.value)} required placeholder='Ingresa tu email' />
        </div>
        <div className='password-register'>
          <label htmlFor='contraseña'>Contraseña:</label>
          <input type='password' id='contraseña' value={contraseña} onChange={(e) => setContraseña(e.target.value)} required placeholder='Ingresa tu contraseña' />
        </div>
        <div className='bottom-register'>
          <button type='submit'>Registrarme</button>
          <p> ¿Ya tenes cuenta? <a href='../Login/Login.jsx'> Inicia sesion </a> </p>
        </div>
      </form>
    </div>
  );
};

export default Registro;