import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import './styles/VrsteKlimaUređaja.css'

function VrsteKlimaUređaja() {
  return (
    <div className='w-100 background-main-container'>
      <div className='inner-container'>
        <h1 className='text-center text-white'>Vaš idealan klima uređaj</h1>
      </div>
      <Container className=''>
        <Row>
          <Col>
            <h4>Tipovi klima uređaja</h4>
            <p>
              Tipično, kada govorimo o klima uređajima, mislimo na fiksne klima
              uređaje koji se sastoje od vanjske i unutarnje jedinice. No, u
              posljednje vrijeme sve je veća popularnost pokretnih ili
              prijenosnih klima uređaja koji su cjenovno prihvatljivi te ne
              zahtijevaju nikakve građevinske radove prilikom montaže. Dovoljno
              je tek spojiti dovod svježeg zraka i prijenosni klima uređaj
              uključiti u struju.
            </p>
          </Col>
          <Col>
            <Image
              className='w-100 h-100 img-fluid'
              src='/images/vrsteKlimaUredjaja.jpg'
              alt='vrste klima uređaja'
            ></Image>
          </Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    </div>
  )
}

export default VrsteKlimaUređaja
