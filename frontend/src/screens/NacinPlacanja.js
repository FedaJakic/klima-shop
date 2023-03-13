import React from 'react'
import { Container } from 'react-bootstrap'

const NacinPlacanja = () => {
  return (
    <Container>
        <h1>Načini plaćanja</h1>

        <h2>Kupovina na web shopu</h2>
        <p><strong>Sve cijene na web shopu Klima-Trgovina su maloprodajne sa uključenim PDV-om.</strong></p>
        <h4>Uz svaki proizvod navedene su 3 cijene:</h4>
        <span>1. cijena: za jednokratno plaćanje</span><br/>
        <span>2. cijena: za plaćanje karticom 2 do 12 rata</span><br/>
        <span>3. cijena: za plaćanje karticom 13 do 24 rate</span><br/><br/>

        <h2>Načini plaćanja</h2>
        <h3>1. Plaćanje internet bankarstvom</h3>
        <p>Proizvodi za koje je zaključena narudžba mogu se platiti putem internet bankarstva bilo koje banke u kojoj je otvorena mogućnost takvog načina plaćanja. Nakon potvrde narudžbe, Klima koncept d.o.o. na e­mail adresu kupca dostavlja ponudu za kreiranu narudžbu, s navedenim podacima potrebnima za uplatu. Sve podatke je potrebno točno upisati i izvršiti uplatu u roku.</p>
        <p>Broj računa za uplate putem internet bankarstva, Erste banka: 
HR16 2402 0061 1008 0976 9 
Model plaćanja: 00
Poziv na broj: broj Narudžbe</p>
    </Container>
  )
}

export default NacinPlacanja