import NavBar from './components/NavBar/NavBar.jsx';
import Registro from './components/Registro/Registro.jsx';
import Login from './components/Login/Login.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;