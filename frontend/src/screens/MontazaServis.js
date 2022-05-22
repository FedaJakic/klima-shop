import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Container, Form } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import { listProducts } from '../actions/productActions'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

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
  const [price, setPrice] = useState('Svi')

  return (
    <>
      <Container>
        {/* <div className='main-container'> */}
        <h1>Montaža i servis</h1>

        <h4>Filteri</h4>
        <Tabs
          defaultActiveKey='brend'
          id='uncontrolled-tab-example'
          className='mb-3'
        >
          <Tab eventKey='brend' title='Brend'>
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
          </Tab>
          <Tab eventKey='energetskiRazred' title='Energetski Razred'>
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
          </Tab>
          <Tab eventKey='velicinaProstora' title='Veličina prostora'>
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
          </Tab>
          <Tab eventKey='ucinakHladjenja' title='Učinak hlađenja'>
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
          </Tab>
          <Tab eventKey='ucinakGrijanja' title='Učinak grijanja'>
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
          </Tab>
          <Tab eventKey='cijena' title='Cijena'>
            <Form.Group>
              <Form.Label>Cijena (kn)</Form.Label>
              <Form.Control
                as='select'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              >
                <option>Svi</option>
                <option>do 2.999kn</option>
                <option>3.000 0- 3.999 kn</option>
                <option>4.000 - 5.999 kn</option>
                <option>6.000 - 7.999 kn</option>
                <option>8.000 - 8.999 kn</option>
                <option>9.000 - 9.999 kn</option>
                <option>više od 10.000 kn</option>
              </Form.Control>
            </Form.Group>
          </Tab>
        </Tabs>

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
                      : warmEff === 'od 8.0 do 8.9 kW'
                      ? warm.warmEff >= 8.0 && warm.warmEff <= 8.9
                      : warmEff === 'od 9.0 do 10 kW'
                      ? warm.warmEff >= 9.0 && warm.warmEff <= 10
                      : warm.category === 'Mono klima uređaj'
                    : warm.category === 'Mono klima uređaj'
                )
                .filter((priceProduct) =>
                  price !== 'Svi'
                    ? price === 'do 2.999kn'
                      ? priceProduct.price <= 2999
                      : price === '3.000 0- 3.999 kn'
                      ? priceProduct.price >= 3000 && priceProduct.price <= 3999
                      : price === '4.000 - 5.999 kn'
                      ? priceProduct.price >= 4000 && priceProduct.price <= 5999
                      : price === '6.000 - 7.999 kn'
                      ? priceProduct.price >= 6000 && priceProduct.price <= 7999
                      : price === '8.000 - 8.999 kn'
                      ? priceProduct.price >= 8000 && priceProduct.price <= 8999
                      : price === '9.000 - 9.999 kn'
                      ? priceProduct.price >= 9000 && priceProduct.price <= 9999
                      : price === 'više - 10.000 kn'
                      ? priceProduct.price >= 10000
                      : priceProduct.category === 'Mono klima uređaj'
                    : priceProduct.category === 'Mono klima uređaj'
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
        {/* </div> */}
      </Container>
    </>
  )
}

export default MonoKlimaScreen
