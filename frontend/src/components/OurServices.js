import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import './styles/OurServices.css'

function OurServices() {
  return (
    <>
      <div class='traineeship'>
        <div class='process-row'>
          <div class='activity animate-from-bottom__0'>
            <div class='relative-block'>
              <div class='activity-icon'>
                <Image
                  alt='An image'
                  src='https://i.ibb.co/ZWp3Yts/ad-operations-process-strategy.png'
                ></Image>
              </div>
              <div class='inactive'>
                <div class='title'>Mno klima uređaji </div>
              </div>
              o
              <div class='active'>
                <div class='title'>Mno klima uređaji</div>
                <div class='sub-title'>
                  Customer interactions, study and analysis of company branding
                  through creative briefs. Creation of mock-up designs by using
                  UI tools that simulate actions and pre-visualize the
                  reactions.
                </div>
              </div>
            </div>
          </div>
          <div class='activity animate-from-bottom__1'>
            <div class='relative-block'>
              <div class='activity-icon'>
                <Image
                  alt='An image'
                  src='https://i.ibb.co/s2nghrT/ad-operations-process-strategy-activation.png'
                ></Image>
              </div>
              <div class='inactive'>
                <div class='title'>Dual klima uređaji </div>
              </div>
              <div class='active'>
                <div class='title'>Mobile App Development</div>
                <div class='sub-title'>
                  Customer interactions, study and analysis of company branding
                  through creative briefs. Creation of mock-up designs by using
                  UI tools that simulate actions and pre-visualize the
                  reactions.
                </div>
              </div>
            </div>
          </div>
          <div class='activity animate-from-bottom__2'>
            <div class='relative-block'>
              <div class='activity-icon'>
                <Image
                  alt='An image'
                  src='https://i.ibb.co/ZWp3Yts/ad-operations-process-strategy.png'
                ></Image>
              </div>
              <div class='inactive'>
                <div class='title'>Montaža</div>
              </div>
              <div class='active'>
                <div class='title'>WordPress</div>
                <div class='sub-title'>
                  Customer interactions, study and analysis of company branding
                  through creative briefs. Creation of mock-up designs by using
                  UI tools that simulate actions and pre-visualize the
                  reactions.
                </div>
              </div>
            </div>
          </div>
          <div class='activity animate-from-bottom__3'>
            <div class='relative-block'>
              <div class='activity-icon'>
                <Image
                  alt='An image'
                  src='https://i.ibb.co/s2nghrT/ad-operations-process-strategy-activation.png'
                ></Image>
              </div>
              <div class='inactive'>
                <div class='title'>Servis</div>
              </div>
              <div class='active'>
                <div class='title'>Digital Marketing</div>
                <div class='sub-title'>
                  Customer interactions, study and analysis of company branding
                  through creative briefs. Creation of mock-up designs by using
                  UI tools that simulate actions and pre-visualize the
                  reactions.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurServices
