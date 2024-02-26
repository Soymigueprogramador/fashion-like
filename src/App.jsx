import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registro from './components/Registro/Registro.jsx';
import Login from './components/Login/Login.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registro/>} />
        <Route path="/Registro/:id/Registro" element={<Registro />} />
        <Route path="/Login/:idLogin" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
