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
        <h1>USKORO U PONUDI</h1>
      </Container>
    </>
  )
}

export default MonoKlimaScreen
