import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Container, Form } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import { listProducts } from '../actions/productActions'

const MonoKlimaScreen = ({ match }) => {
  const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  const [energyClass, setEnergyClass] = useState('Svi')
  const [sizeOfRoom, setSizeOfRoom] = useState('Svi')
  const [brand, setBrand] = useState('Svi')
  const [coldEff, setColdEff] = useState('Svi')
  const [warmEff, setWarmEff] = useState('Svi')

  return (
    <>
      <Container>
        <h1>Mono klima uređaji</h1>

        <Form.Group>
          <Form.Label>Brend</Form.Label>
          <Form.Control
            as='select'
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          >
            <option>Svi</option>
            <option>Fujitsu</option>
            <option>Hyundai</option>
            <option>Mitsubishi Electric</option>
            <option>Olimpia Splendid</option>
            <option>QZEN</option>
            <option>Toshiba</option>
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Energetski razred</Form.Label>
          <Form.Control
            as='select'
            value={energyClass}
            onChange={(e) => setEnergyClass(e.target.value)}
          >
            <option>Svi</option>
            <option>A</option>
            <option>A+</option>
            <option>A++</option>
            <option>A+++</option>
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Veličina prostora</Form.Label>
          <Form.Control
            as='select'
            value={sizeOfRoom}
            onChange={(e) => setSizeOfRoom(e.target.value)}
          >
            <option>Svi</option>
            <option>do 15</option>
            <option>16-25</option>
            <option>26-35</option>
            <option>36-45</option>
            <option>46-55</option>
            <option>56-65</option>
            <option>66-75</option>
            <option>više od 75</option>
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Učinak hlađenja</Form.Label>
          <Form.Control
            as='select'
            value={coldEff}
            onChange={(e) => setColdEff(e.target.value)}
          >
            <option>Svi</option>
            <option>od 2.0 do 2.9 kW</option>
            <option>od 3.0 do 3.9 kW</option>
            <option>od 4.0 do 5.9 kW</option>
            <option>od 6.0 do 7.9 kW</option>
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Učinak grijanja</Form.Label>
          <Form.Control
            as='select'
            value={warmEff}
            onChange={(e) => setWarmEff(e.target.value)}
          >
            <option>Svi</option>
            <option>od 2.0 do 2.9 kW</option>
            <option>od 3.0 do 3.9 kW</option>
            <option>od 4.0 do 5.9 kW</option>
            <option>od 6.0 do 7.9 kW</option>
            <option>od 8.0 do 8.9 kW</option>
            <option>od 9.0 do 10 kW</option>
          </Form.Control>
        </Form.Group>

        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <>
            <Row>
              {products
                .filter((category) => category.category === 'Mono klima uređaj')
                .filter((brandName) =>
                  brand !== 'Svi'
                    ? brandName.brand === brand.toString()
                    : brandName.category === 'Mono klima uređaj'
                )
                .filter((energy) =>
                  energyClass !== 'Svi'
                    ? energy.energyClass === energyClass.toString()
                    : energy.category === 'Mono klima uređaj'
                )
                .filter((size) =>
                  sizeOfRoom !== 'Svi'
                    ? size.sizeOfRoom === sizeOfRoom.toString()
                    : size.category === 'Mono klima uređaj'
                )
                .filter((cold) =>
                  coldEff !== 'Svi'
                    ? coldEff === 'od 2.0 do 2.9 kW'
                      ? cold.coldEff >= 2.0 && cold.coldEff <= 2.9
                      : coldEff === 'od 3.0 do 3.9 kW'
                      ? cold.coldEff >= 3.0 && cold.coldEff <= 3.9
                      : coldEff === 'od 4.0 do 5.9 kW'
                      ? cold.coldEff >= 4.0 && cold.coldEff <= 5.9
                      : coldEff === 'od 6.0 do 7.9 kW'
                      ? cold.coldEff >= 6.0 && cold.coldEff <= 7.9
                      : cold.category === 'Mono klima uređaj'
                    : cold.category === 'Mono klima uređaj'
                )
                .filter((warm) =>
                  warmEff !== 'Svi'
                    ? warmEff === 'od 2.0 do 2.9 kW'
                      ? warm.warmEff >= 2.0 && warm.warmEff <= 2.9
                      : warmEff === 'od 3.0 do 3.9 kW'
                      ? warm.warmEff >= 3.0 && warm.warmEff <= 3.9
                      : warmEff === 'od 4.0 do 5.9 kW'
                      ? warm.warmEff >= 4.0 && warm.warmEff <= 5.9
                      : warmEff === 'od 6.0 do 7.9 kW'
                      ? warm.warmEff >= 6.0 && warm.warmEff <= 7.9
                      : warm.category === 'od 8.0 do 8.9 kW'
                      ? warm.warmEff >= 8.0 && warm.warmEff <= 8.9
                      : warm.category === 'od 9.0 do 10 kW'
                      ? warm.warmEff >= 9.0 && warm.warmEff <= 10
                      : warm.category === 'Mono klima uređaj'
                    : warm.category === 'Mono klima uređaj'
                )
                .map((product) => (
                  <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                  </Col>
                ))}
            </Row>
            <Paginate
              pages={pages}
              page={page}
              keyword={keyword ? keyword : ''}
            />
          </>
        )}
      </Container>
    </>
  )
}

export default MonoKlimaScreen
