import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className='container-footer'>
      <div className='main-footer'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3 col-sm-6'>
              <h4>KlimaTech</h4>
              <ul className='list-unstyled'>
                <li>sadasd</li>
                <li>sadasd</li>
                <li>sadasd</li>
                <li>sadasd</li>
                <li>sadasd</li>
              </ul>
            </div>
            <div className='col-md-3 col-sm-6'>
              <h4>KlimaTech</h4>
              <ul className='list-unstyled'>
                <li>sadasd</li>
                <li>sadasd</li>
                <li>sadasd</li>
                <li>sadasd</li>
                <li>sadasd</li>
              </ul>
            </div>
            <div className='col-md-3 col-sm-6'>
              <h4>KlimaTech</h4>
              <ul className='list-unstyled'>
                <li>sadasd</li>
                <li>sadasd</li>
                <li>sadasd</li>
                <li>sadasd</li>
                <li>sadasd</li>
              </ul>
            </div>
          </div>
          <div className='footer-bottom'>
            <p className='text-xs-center'>
              &copy; {new Date().getFullYear()} KlimaTech - Sva prava pridržana
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
