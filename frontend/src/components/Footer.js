import React from 'react'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import './styles/Footer.css'
import { Nav } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer class='footer-distributed'>
      <div class='footer-left'>
        <h3>KLIMATECH</h3>

        <p class='footer-links'>
          {/* <Link class='link-1'>Home</Link> */}
          <LinkContainer to='/'>
            <Nav.Link class='link-1'>Home</Nav.Link>
          </LinkContainer>

          <LinkContainer to='/'>
            <Nav.Link>Mono klima uređaji</Nav.Link>
          </LinkContainer>

          <LinkContainer to='/'>
            <Nav.Link>Dual klima uređaji</Nav.Link>
          </LinkContainer>

          <Link>About</Link>

          <Link>Faq</Link>

          <Link>Contact</Link>
        </p>

        <p class='footer-company-name'>KlimaTech © 2</p>
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
            <Link>support@company.com</Link>
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
          <Link>
            <i class='fa fa-facebook'></i>
          </Link>
          <Link>
            <i class='fa fa-twitter'></i>
          </Link>
          <Link>
            <i class='fa fa-linkedin'></i>
          </Link>
          <Link>
            <i class='fa fa-github'></i>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
