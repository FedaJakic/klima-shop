import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './styles/Footer.css'

const Footer = () => {
  return (
    <footer class='footer-distributed'>
      <div class='footer-left'>
        <h3>KLIMATECH</h3>

        <p class='footer-links'>
          <a href='#' class='link-1'>
            Home
          </a>

          <a href='#'>Blog</a>

          <a href='#'>Pricing</a>

          <a href='#'>About</a>

          <a href='#'>Faq</a>

          <a href='#'>Contact</a>
        </p>

        <p class='footer-company-name'>Company Name © 2015</p>
      </div>

      <div class='footer-center'>
        <div>
          <i class='fa fa-map-marker'></i>
          <p>
            <span>Put mira 47</span> 21210, Solin
          </p>
        </div>

        <div>
          <i class='fa fa-phone'></i>
          <p>+385 91 231 7382</p>
        </div>

        <div>
          <i class='fa fa-envelope'></i>
          <p>
            <a href='mailto:support@company.com'>support@company.com</a>
          </p>
        </div>
      </div>

      <div class='footer-right'>
        <p class='footer-company-about'>
          <span>About the company</span>
          Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
          euismod convallis velit, eu auctor lacus vehicula sit amet.
        </p>

        <div class='footer-icons'>
          <a href='#'>
            <i class='fa fa-facebook'></i>
          </a>
          <a href='#'>
            <i class='fa fa-twitter'></i>
          </a>
          <a href='#'>
            <i class='fa fa-linkedin'></i>
          </a>
          <a href='#'>
            <i class='fa fa-github'></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
