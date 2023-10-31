import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home';
import Contactos from './views/Contactos';
import Pagina404 from './views/404';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
         <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Contactos' element={<Contactos/>} />
          <Route path='*' element={<Pagina404/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
