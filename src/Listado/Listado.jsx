import React from 'react'
import { Table } from 'react-bootstrap'
import './listado.css'



const Listado = ({base, filtrado}) => {
  

  return (
    

    <div className='tabla'>
            <Table responsive>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Edad</th>
                <th>Cargo</th>
                <th>Telefono</th>
              </tr>
            </thead>
            <tbody>
            {filtrado.length ? 
             filtrado.map((col) =>(
              <tr key={col.id}>
                <td>{col.nombre}</td>
                <td>{col.correo}</td>
                <td>{col.edad}</td>
                <td>{col.cargo}</td>
                <td>{col.telefono}</td>
              </tr>
            ))
            : 
            base.map((col) =>(
              <tr key={col.id}>
                <td>{col.nombre}</td>
                <td>{col.correo}</td>
                <td>{col.edad}</td>
                <td>{col.cargo}</td>
                <td>{col.telefono}</td>
              </tr>
            ))
            }
            </tbody>
          </Table>  
          
          
    </div>
  )
}

export default Listado
