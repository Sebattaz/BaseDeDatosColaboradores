import React from 'react'
import './buscador.css'
import { Form } from 'react-bootstrap'

const Buscador = ({handleSearch}) => {
  return (
    <>
        <Form>
        <Form.Group className="mb-3" controlId="">
                <Form.Control type="search"
                 placeholder="Ingresa busqueda"
                 onChange={handleSearch}
                 name='busqueda'
                 />
        </Form.Group>
        </Form>
    </>
  )
}

export default Buscador
