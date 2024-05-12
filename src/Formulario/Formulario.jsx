import React, { useState } from 'react'
import './formulario.css'
import { Form } from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import Alerta from '../Alert/Alert'




const Formulario = ({setBD, setFiltrado}) => {
    
    
    const [alert, setAlert] = useState(false);
    const [view, setView] = useState(0)
    
    const [nuevoCol, setNuevoCol] = useState({
        id:'',
        nombre:'',
        correo:'',
        edad:'',
        cargo:'',
        telefono:'',
    });
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(nuevoCol.nombre =='' || nuevoCol.correo =='' || nuevoCol.edad ==''|| nuevoCol.cargo==''|| nuevoCol.telefono =='' ){
            setAlert(false);
            setView(1);
        }else{
            setAlert(true)
            setBD( prevBD => [...prevBD, nuevoCol]);
            setFiltrado( prevBD => [...prevBD, nuevoCol]);
            limpiar();
            setView(1);
        }

        
    }
    
    const handleChange=(e)=>{
       const {name, value} = e.target;
        setNuevoCol({...nuevoCol, [name]:value})
        /*setNuevoCol(prevState => ({
            ...prevState, [name]:value
        }))*/
    }

    const limpiar=()=>{
        setNuevoCol({
            id:'',
            nombre:'',
            correo:'',
            edad:'',
            cargo:'',
            telefono:'',
        })
    }

  return (
    <div className='form'>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="">
                    <Form.Label>Ingreso Nombre</Form.Label>
                    <Form.Control type="text"
                     placeholder="Ingresa Nombre y Apellido"
                     onChange={handleChange}
                     value={nuevoCol.nombre}
                     name='nombre'
                     />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" 
                placeholder="Enter email"
                onChange={handleChange}
                value={nuevoCol.correo}
                name='correo'
                 />
                <Form.Text className="text-muted">
                    Ejemplo: diegoriquel@example.com
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="">
                    <Form.Label>Edad</Form.Label>
                    <Form.Control type="text"
                     placeholder="Ingresa Edad"
                     onChange={handleChange}
                     value={nuevoCol.edad}
                     name='edad'
                      />
            </Form.Group>

            <Form.Group className="mb-3" controlId="">
                    <Form.Label>Cargo</Form.Label>
                    <Form.Control type="text" 
                    placeholder="Ingresa Cargo" 
                    onChange={handleChange}
                    value={nuevoCol.cargo}
                    name='cargo'
                    />
            </Form.Group>

            <Form.Group className="mb-3" controlId="">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control type="text" 
                    placeholder="Ingresa Telefono"
                    onChange={handleChange}
                    value={nuevoCol.telefono}
                    name='telefono'
                     />
            </Form.Group>

            
            <Button variant="primary" type="submit">
                Enviar
            </Button>
            <Alerta estado={alert} vista={view}/>
        </Form>
      
    </div>
  )
}

export default Formulario
