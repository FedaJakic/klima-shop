import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { FcHighPriority } from 'react-icons/fc'

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
       {product.onSale === true ? (
       <h4
        className = 'text-danger' 
        >
       Akcija <FcHighPriority /> </h4>) : <></>}
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image.toString().split(',')[0]} variant='top' />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        {/* <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text> */}

        <Card.Text as='h3'>
                   kn{' '}
                      {product.onSale === true ? (
                        <span
                          className='font-weight-bold'
                          style={{ fontSize: 'x-large' }}
                        >
                          <span>
                            {' '}
                            {Number(
                              ((100 - product.sale) * product.price) / 100
                            )
                              .toFixed(2)
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                          </span>
                          <span
                            style={{ fontSize:'small' }}
                          >
                            <br></br>
                            eur{' '}
                            {Number(
                              ((100 - product.sale) * product.price) / 100 / 7.53450
                            )
                              .toFixed(2)
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                          </span>
                        </span>
                      ) : (
                        <span
                          className='font-weight-bold'
                          style={{ fontSize: 'x-large' }}
                        >
                          {Number(product.price)
                            .toFixed(2)
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                          <span
                            style={{ fontSize:'small' }}
                          >
                            <br></br>
                            eur{' '}
                            {Number(product.price / 7.53450)
                              .toFixed(2)
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                          </span>
                        </span>)}          
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
