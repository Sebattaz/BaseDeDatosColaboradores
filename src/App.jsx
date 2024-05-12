import { useState } from 'react'
import './App.css'
import { BaseColaboradores } from './Colaboradores/BDColaboradores'
import Listado from './Listado/Listado'
import Formulario from './Formulario/Formulario'
import Buscador from './Buscador/Buscador'

function App() {
  
  const [BD, setBD] = useState(BaseColaboradores)
  const [filtro, setFiltro] = useState("")
  const [filtrado, setFiltrado ] = useState([])
  
  const handleSearch=(e)=>{
      setFiltro(e.target.value.toLowerCase());
      
      setFiltrado(
        BD.filter((result)=> 
         Object.values(result).some((encontrado)=>
          encontrado.toLowerCase().includes(filtro))
      ))
  }
  

  return (
    
    <div className='contenedor'>
    <header>
        <h1>Listados de Colaboradores</h1>
        <Buscador handleSearch={handleSearch} />
    </header> 
    <div className='contenido'> 
      <Listado base={BD} filtrado={filtrado} />
      <Formulario setBD={setBD} setFiltrado={setFiltrado} />
    </div>
    </div>
  )
}

export default App
