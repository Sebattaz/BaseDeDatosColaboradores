import React from 'react'
import './alert.css'
import { Alert } from 'react-bootstrap';

const Alerta = ({estado,vista}) => {
  return (
    <div className={`alert ${vista ? '' : 'hide' }`} >
        {estado ? (<Alert key="success" variant="success">¡Gardados correctamente!</Alert>) : (<Alert key="danger" variant="danger">¡Faltan datos!</Alert>)}
    </div>
  )
}

export default Alerta
