import React from 'react'
import { Table } from 'react-bootstrap'

const TehnicalCharacteristics = ({ product }) => {
  return (
    <>
      <h3>Tehničke karakteristike</h3>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>Radna tvar</td>
            <td>R32</td>
          </tr>
          <tr>
            <td>Raspon rashladnog učinka (kW)</td>
            <td>0.9 - 3.4</td>
          </tr>
          <tr>
            <td>SEER / Energetski razred HL</td>
            <td>6.2 / A++</td>
          </tr>
          <tr>
            <td>Raspon učinka grijanja (kW)</td>
            <td>0.8 - 3.4</td>
          </tr>
          <tr>
            <td>SCOP / Energetski razred GR</td>
            <td>4.0 / A+</td>
          </tr>
          <tr>
            <td>Dimenzije unutarnje jedinice (VxŠxD) mm</td>
            <td>285×805×194</td>
          </tr>
          <tr>
            <td>Težina unutarnje jedinice (kg)</td>
            <td>7.5</td>
          </tr>
          <tr>
            <td>Razina buke - hlađenje UJ (dBA)</td>
            <td>21/40</td>
          </tr>
          <tr>
            <td>Wi-Fi</td>
            <td>Wi-Fi ugrađen</td>
          </tr>
          <tr>
            <td>Ionizator zraka</td>
            <td>Da</td>
          </tr>
          <tr>
            <td>Dimenzije vanjske jedinice (VxŠxD) mm</td>
            <td>285×805×194</td>
          </tr>
          <tr>
            <td>Težina vanjske jedinice (kg)</td>
            <td>22.7</td>
          </tr>
          <tr>
            <td>Razina buke vanjske jedinice (dBA)</td>
            <td>56</td>
          </tr>
          <tr>
            <td>Promijer cijevi - tekuć. (mm/")</td>
            <td>6,35 (1/4")</td>
          </tr>
          <tr>
            <td>Promijer cijevi - plin (mm/")</td>
            <td>6,35 (1/4")</td>
          </tr>
          <tr>
            <td>Maksimalna duljina cijevi (m)</td>
            <td>25</td>
          </tr>
          <tr>
            <td>Maksimalna vis. razlika (m)</td>
            <td>10</td>
          </tr>
          <tr>
            <td>Napon priključka</td>
            <td>230 V / 50 Hz</td>
          </tr>
        </tbody>
      </Table>
    </>
  )
}

export default TehnicalCharacteristics
