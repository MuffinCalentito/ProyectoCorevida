import { Routes, Route} from 'react-router-dom';
import NavBar from './componentes/NavBar';
import Inicio from './paginas/Inicio';
import Nosotros from './paginas/Nosotros';
import Servicios from './paginas/Servicios';
import './App.css'

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Inicio />}/>
      <Route path="/nosotros" element={<Nosotros />}/>
      <Route path="/servicios" element={<Servicios />}/>
    </Routes>
    </>
  );
}

export default App;