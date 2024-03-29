import React from 'react'
// import { Button } from './Button';
import './styles/Hero.css'

function Hero() {
  return (
    <div className='hero-container'>
      <h1>Klima-Trgovina</h1>
      <p>Klime za vaš dom!</p>
      <div className='hero-btns'>
        {/* <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        > */}
        {/* WATCH TRAILER <i className='far fa-play-circle' />
        </Button> */}
      </div>
    </div>
  )
}

export default Hero
