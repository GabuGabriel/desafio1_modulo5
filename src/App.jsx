import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Contactos from './components/Contactos'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Contactos' element={<Contactos />} />
        </Routes>
      </>
    </BrowserRouter>
  )
}

export default App
