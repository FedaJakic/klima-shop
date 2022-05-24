import React, { useState, useEffect } from 'react'
import './styles/ProductImageGallery.css'

const ProductImageGallery = ({ imgList }) => {
  // const [selectedImg, setSelectedImg] = useState(imgList[0])
  const [selectedImg, setSelectedImg] = useState(
    imgList.toString().split(',')[0]
  )

  return (
    <>
      <div className='main-container'>
        <div className='image-container'>
          <img src={selectedImg} alt='selected' className='selected' />
          <div className='imgContainer'>
            {imgList
              .toString()
              .split(',')
              .map((img, index) => (
                <img
                  style={{
                    border: selectedImg === img ? '.5px solid #343a40 ' : '',
                  }}
                  key={index}
                  src={img}
                  alt='asd'
                  onClick={() => setSelectedImg(img)}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductImageGallery
