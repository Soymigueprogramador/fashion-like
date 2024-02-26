// Importaciones
import './Registro.css';
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
    <div>
      <form onSubmit={manejoDeEnvios}>
        <div>
          <label htmlFor='nombre'>Nombre</label>
          <input type='text' id='nombre' value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input type='text' id='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label htmlFor='contraseña'>Contraseña</label>
          <input type='password' id='contraseña' value={contraseña} onChange={(e) => setContraseña(e.target.value)} required />
        </div>
        <button type='submit'>Registrarme</button>
        <p> ¿Ya tenes cuenta? <a href='../Login/Login.jsx'> Inicia sesion </a> </p>
      </form>
    </div>
  );
};

export default Registro;