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
                <div class='title'>Mono klima uređaji </div>
              </div>
              <div class='active'>
                <div class='title'>Mono klima uređaji</div>
                <div class='sub-title'>
                  Mono klima uređaj sastoji od jedne vanjske i jedne unutarnje
                  jedinice. Mono split klime imaju fleksibilnu ugradnju, razina
                  buke u sobi je smanjena s obzirom da je jedinica vani i nema
                  nekih posebnih zahtjeva za zatvoreni prostor.
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
                <div class='title'>Multi klima uređaji </div>
              </div>
              <div class='active'>
                <div class='title'>Multi klima uređaji</div>
                <div class='sub-title'>
                  Multi klima uređaj ima nekoliko unutarnjih jedinica (max. 8) i
                  sve su povezane na jednu vanjsku jedinicu. Mogu hladiti i
                  grijati jednu ili više prostorija. Multi klima uređaj može
                  imati unutarnje jedinice postavljene u različitim prostorijama
                  kuće ili stana.
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
                <div class='title'>Montaža </div>
              </div>
              <div class='active'>
                <div class='title'>Montaža</div>
                <div class='sub-title'>
                  Klimatizacijski sustav mora biti profesionalno instaliran od
                  strane profesionalnog stručnjaka. Ono što biste vi trebali
                  prvo učiniti jeste razmotriti gdje želite da vanjska i
                  unutarnje jedinice budu postavljene. Vanjsku kompresorsku
                  jedinicu idealno bi bilo postaviti u sjeni, da nema izravne
                  sunčeve svjetlosti te da je postavljena na čvrstu površinu ili
                  pričvršćena na zid.
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
                <div class='title'>Servis </div>
              </div>
              <div class='active'>
                <div class='title'>Servis</div>
                <div class='sub-title'>
                  Prilikom servisa vašeg klima uređaja, ovlašteni će
                  frigomehaničar prekontrolirati ispravnost svih sklopova i
                  kompenenata klima uređaja. Servis klima uređaja sastoji se od
                  6 koraka, a prva dva koraka možete odraditi i vi sami. Ukoliko
                  i dođe do kvara vašeg klima uređaja, nemate brige, jer je naš
                  Servisni Centar izvrsno opremljen i spreman u što kraćem roku
                  otkloniti svaki kvar.
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
