import React from 'react'
import { Row, ListGroup } from 'react-bootstrap'

const ACAtributes = ({ coldEff, warmEff, energyClass, sizeOfRoom }) => {
  return (
    <>
      <Row>
        <ListGroup.Item className='text-center block-example border border-0 border-dark'>
          <i class='fas fa-snowflake'></i>
          <p>Učinak hlađenja (kW)</p>
          <p>{coldEff}</p>
        </ListGroup.Item>
        <ListGroup.Item className='text-center block-example border border-0 border-dark'>
          <i class='fas fa-sun'></i>
          <p>Učinak grijanja (kW)</p>
          <p>{warmEff}</p>
        </ListGroup.Item>
        <ListGroup.Item className='text-center block-example border border-0 border-dark'>
          <i class='fas fa-bolt'></i>
          <p>Energetski razred</p>
          <p>{energyClass}</p>
        </ListGroup.Item>
        <ListGroup.Item className='text-center block-example border border-0 border-dark'>
          <i class='fas fa-house-user'></i>
          <p>Veličina prostora</p>
          <p>{sizeOfRoom}</p>
        </ListGroup.Item>
      </Row>
    </>
  )
}

export default ACAtributes
