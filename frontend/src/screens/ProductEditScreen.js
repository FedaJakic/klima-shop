import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Container } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { listProductDetails, updateProduct } from '../actions/productActions'
import { PRODUCT_UPDATE_RESET } from '../constants/productConstants'

const ProductEditScreen = ({ match, history }) => {
  const productId = match.params.id

  const [name, setName] = useState('')
  const [sifraProizvoda, setSifraProizvoda] = useState('')
  const [price, setPrice] = useState(0)
  const [image, setImage] = useState('')
  const [brand, setBrand] = useState('')
  const [coldEff, setColdEfficiency] = useState('')
  const [warmEff, setWarmEfficiency] = useState('')
  const [energyClass, setEnergyClass] = useState('')
  const [sizeOfRoom, setSizeOfRoom] = useState('')
  const [category, setCategory] = useState('')
  const [countInStock, setCountInStock] = useState(0)
  const [description, setDescription] = useState('')
  const [uploading, setUploading] = useState(false)

  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  const productUpdate = useSelector((state) => state.productUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET })
      history.push('/admin/productlist')
    } else {
      if (!product.name || product._id !== productId) {
        dispatch(listProductDetails(productId))
      } else {
        setName(product.name)
        setSifraProizvoda(product.sifraProizvoda)
        setPrice(product.price)
        setImage(product.image)
        setBrand(product.brand)
        setColdEfficiency(product.coldEff)
        setWarmEfficiency(product.warmEff)
        setEnergyClass(product.energyClass)
        setSizeOfRoom(product.sizeOfRoom)
        setCategory(product.category)
        setCountInStock(product.countInStock)
        setDescription(product.description)
      }
    }
  }, [dispatch, history, productId, product, successUpdate])

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file)
    setUploading(true)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }

      const { data } = await axios.post('/api/upload', formData, config)

      setImage(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      updateProduct({
        _id: productId,
        name,
        sifraProizvoda,
        price,
        image,
        brand,
        coldEff,
        warmEff,
        energyClass,
        sizeOfRoom,
        category,
        description,
        countInStock,
      })
    )
  }

  return (
    <>
      <Container>
        <Link to='/admin/productlist' className='btn btn-light my-3'>
          Natrag
        </Link>
        <FormContainer>
          <h1>Uređivanje proizvoda</h1>
          {loadingUpdate && <Loader />}
          {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant='danger'>{error}</Message>
          ) : (
            <Form onSubmit={submitHandler}>
              {/* <Form.Group controlId='najprodavanij'>
                <Form.Label>Najprodavani model</Form.Label>
                <Form.Check
                  type='switch'
                  id='custom-switch'
                  label='Najprodavani'
                />
              </Form.Group> */}

              <Form.Group controlId='name'>
                <Form.Label>Naziv</Form.Label>
                <Form.Control
                  type='name'
                  placeholder='Enter name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='sifraProizvoda'>
                <Form.Label>Sifra proizvoda</Form.Label>
                <Form.Control
                  type='name'
                  placeholder='Unesite sifru'
                  value={sifraProizvoda}
                  onChange={(e) => setSifraProizvoda(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='price'>
                <Form.Label>Cijena</Form.Label>
                <Form.Control
                  type='number'
                  placeholder='Enter price'
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                ></Form.Control>
              </Form.Group>

              {/* <Form.Check type='switch' id='custom-switch' label='Na akciji' /> */}

              <Form.Group controlId='image'>
                <Form.Label>Slika</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter image url'
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                ></Form.Control>
                <Form.File
                  id='image-file'
                  label='Choose File'
                  custom
                  onChange={uploadFileHandler}
                ></Form.File>
                {uploading && <Loader />}
              </Form.Group>

              <Form.Group controlId='brand'>
                <Form.Label>Brend</Form.Label>
                <Form.Control
                  as='select'
                  placeholder='Enter brand'
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                >
                  <option></option>
                  <option>Fujitsu</option>
                  <option>Hyundai</option>
                  <option>Mitsubishi Electric</option>
                  <option>Olimpia Splendid</option>
                  <option>QZEN</option>
                  <option>Toshiba</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId='coldEff'>
                <Form.Label>Učinak hlađenja</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='(kW)'
                  value={coldEff}
                  onChange={(e) => setColdEfficiency(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='warmEff'>
                <Form.Label>Učinak grijanja</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='(kW)'
                  value={warmEff}
                  onChange={(e) => setWarmEfficiency(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='energyClass'>
                <Form.Label>Energetski razred</Form.Label>
                <Form.Control
                  as='select'
                  placeholder='Enter category'
                  value={energyClass}
                  onChange={(e) => setEnergyClass(e.target.value)}
                >
                  <option>A+++</option>
                  <option>A++</option>
                  <option>A+</option>
                  <option>A</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId='sizeOfRoom'>
                <Form.Label>Za veličinu prostora (m2)</Form.Label>
                <Form.Control
                  as='select'
                  placeholder='Enter category'
                  value={sizeOfRoom}
                  onChange={(e) => setSizeOfRoom(e.target.value)}
                >
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

              <Form.Group controlId='countInStock'>
                <Form.Label>Count In Stock</Form.Label>
                <Form.Control
                  type='number'
                  placeholder='Enter countInStock'
                  value={countInStock}
                  onChange={(e) => setCountInStock(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='category'>
                <Form.Label>Kategorija</Form.Label>
                <Form.Control
                  as='select'
                  placeholder='Enter category'
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option></option>
                  <option>Mono klima uređaj</option>
                  <option>Dual klima uređaj</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId='description'>
                <Form.Label>Opis proizovda</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter description'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Button type='submit' variant='primary'>
                Update
              </Button>
            </Form>
          )}
        </FormContainer>
      </Container>
    </>
  )
}

export default ProductEditScreen
