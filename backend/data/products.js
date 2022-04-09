const products = [
  {
    name: 'Hyundai Elite Inverter 2.6 kW',
    sifraProizvoda: 'HRH-09GMV1HRO-09GMV1',
    image: '/images/1-600ed1de63f2c_600edb3be8619_640.png',
    description:
      'Osnovni model Hyundai klima uređaja hladi vrući zrak u prostoriji na željenu temperaturu i pritom odlično izgleda. Klima uređaj Hyundai Performance Inverter Plus HRH-09BMV/HRO-09BMV u prostorijama do 25 m² osigurava ugodnu klimu. Istovremeno filtrira zrak u prostoriji pomoću filtarskog sustava koji se sastoji od filtera visoke gustoće, aromatizirajućeg filtera i filtera s aktivnim ugljenom. Dodatnu kvalitetu zraka ovom modelu Hyundai klima uređaja osigurava i ionizator zraka. Također, ova serija koristi ekološki prihvatljiv rashladni medij R32 koji ne samo da pomaže pri očuvanju okoliša, već i pridonosi energetskoj učinkovitosti uređaja.',
    brand: 'Hyundai',
    category: 'Mono klima uređaj',
    price: 4075.0,
    onSale: false,
    sale: 0,
    coldEff: 2.6,
    warmEff: 2.9,
    energyClass: 'A++',
    sizeOfRoom: '16-25',
    countInStock: 3,
    rating: 0,
    numReviews: 0,
    najtrazeni: false,
  },
  {
    name: 'Hyundai Elite Inverter 3.5 kW',
    sifraProizvoda: 'HRH-12GMV1HRO-12GMV2',
    image: '/images/1-600ed1de63f2c_600edbefaf804_640.png',
    description:
      'Ovaj napredni model Hyundai klima uređaja s razlogom osvaja tržište. Uz svoj inovativni dizajn i moćne performanse Hyundai Elite Inverter HRH-12GMV2/HRO-12GMV2 nudi komfornu raznolikost funkcija i tehniku hlađenja najnovije generacije. Ovaj iznimni klima uređaj pobrinut će se za sve, bilo to hlađenje, odvlaživanje ili grijanje....',
    brand: 'Hyundai',
    category: 'Mono klima uređaj',
    price: 5400.0,
    onSale: false,
    sale: 0,
    coldEff: 3.5,
    warmEff: 3.8,
    energyClass: 'A+++',
    sizeOfRoom: '26-35',
    countInStock: 10,
    rating: 0,
    numReviews: 0,
    najtrazeni: false,
  },
  {
    name: 'Hyundai Elite Inverter 5.3 kW',
    sifraProizvoda: 'HRH-18GMV1HRO-18GMV1',
    image: '/images/1-600ed1de63f2c_600edbf0dfce6_640.png',
    description:
      'Ovaj napredni model Hyundai klima uređaja s razlogom osvaja tržište. Uz svoj inovativni dizajn i moćne performanse Hyundai Elite Inverter HRH-18GMV1/HRO-18GMV1 nudi komfornu raznolikost funkcija i tehniku hlađenja najnovije generacije. Ovaj iznimni klima uređaj pobrinut će se za sve, bilo to hlađenje, odvlaživanje ili grijanje. Svojim učinkom hlađenja od 5.3 kW i učinkom grijanja od 5.6 kW, klima uređaj Elite Inverter serije preporučuje se za prostorije veličine do 55 m². Osim pouzdanog hlađenja i grijanja ovaj klima uređaj osigurava i iznimnu kvalitetu i čistoću zraka zahvaljujući kompleksnom filtarskom sustavu od više tipova filtera ( filtera visoke gustoće, filtera sa hladnim katalizatorom te višeslojnog filtera sa aktivnim ugljikom i vitaminom C ). Uz ovu iznimnu filtraciju Elite Inverter serija dolazi i s ionizatorom koji osigurava još bolju kvalitetu zraka i pomaže pri sprječavanju bolesti pluća poput astme.',
    brand: 'Hyundai',
    category: 'Mono klima uređaj',
    price: 8500.0,
    onSale: false,
    sale: 0,
    coldEff: 5.3,
    warmEff: 5.6,
    energyClass: 'A++',
    sizeOfRoom: '46-55',
    countInStock: 2,
    rating: 0,
    numReviews: 0,
    najtrazeni: false,
  },
  {
    name: 'Hyundai Performance Inverter Plus 2.6 kW',
    sifraProizvoda: 'HRH-09BMVHRO-09BMV',
    image: '/images/3-600ecc85d15b4_600ed7039f329_640.png',
    description:
      'Osnovni model Hyundai klima uređaja hladi vrući zrak u prostoriji na željenu temperaturu i pritom odlično izgleda. Klima uređaj Hyundai Performance Inverter Plus HRH-09BMV/HRO-09BMV u prostorijama do 25 m² osigurava ugodnu klimu. Istovremeno filtrira zrak u prostoriji pomoću filtarskog sustava koji se sastoji od filtera visoke gustoće, aromatizirajućeg filtera i filtera s aktivnim ugljenom. Dodatnu kvalitetu zraka ovom modelu Hyundai klima uređaja osigurava i ionizator zraka. Također, ova serija koristi ekološki prihvatljiv rashladni medij R32 koji ne samo da pomaže pri očuvanju okoliša, već i pridonosi energetskoj učinkovitosti uređaja.',
    brand: 'Hyundai',
    category: 'Mono klima uređaj',
    price: 4075.0,
    onSale: false,
    sale: 0,
    coldEff: 2.6,
    warmEff: 2.9,
    energyClass: 'A++',
    sizeOfRoom: '16-25',
    countInStock: 10,
    rating: 0,
    numReviews: 0,
    najtrazeni: false,
  },
  {
    name: 'Hyundai Performance Inverter Plus 3.5 kW',
    sifraProizvoda: 'HRH-12BMVHRO-12BMV',
    image: '/images/3-600ecc85d15b4_600ed9d08477d_640.png',
    description:
      'Osnovni model Hyundai klima uređaja hladi vrući zrak u prostoriji na željenu temperaturu i pritom odlično izgleda. Klima uređaj Hyundai Performance Inverter Plus HRH-12BMV/HRO-12BMV u prostorijama do 35 m² osigurava ugodnu klimu. Istovremeno filtrira zrak u prostoriji pomoću filtarskog sustava koji se sastoji od filtera visoke gustoće, aromatizirajućeg filtera i filtera s aktivnim ugljenom. Dodatnu kvalitetu zraka ovom modelu Hyundai klima uređaja osigurava i ionizator zraka. Također, ova serija koristi ekološki prihvatljiv rashladni medij R32 koji ne samo da pomaže pri očuvanju okoliša, već i pridonosi energetskoj učinkovitosti uređaja.',
    brand: 'Hyundai',
    category: 'Mono klima uređaj',
    price: 4350.0,
    onSale: false,
    sale: 0,
    coldEff: 3.5,
    warmEff: 3.8,
    energyClass: 'A++',
    sizeOfRoom: '26-36',
    countInStock: 7,
    rating: 0,
    numReviews: 0,
    najtrazeni: false,
  },
  {
    name: 'Hyundai Performance Inverter Plus 5.3 kW',
    sifraProizvoda: 'HRH-18BMVHRO-24BMV',
    image: '/images/3-600ecc85d15b4_600ed64e094ed_640.png',
    description:
      'Osnovni model Hyundai klima uređaja hladi vrući zrak u prostoriji na željenu temperaturu i pritom odlično izgleda. Klima uređaj Hyundai Performance Inverter Plus HRH-18BMV/HRO-18BMV u prostorijama do 55 m² osigurava ugodnu klimu. Istovremeno filtrira zrak u prostoriji pomoću filtarskog sustava koji se sastoji od filtera visoke gustoće, aromatizirajućeg filtera i filtera s aktivnim ugljenom. Dodatnu kvalitetu zraka ovom modelu Hyundai klima uređaja osigurava i ionizator zraka. Također, ova serija koristi ekološki prihvatljiv rashladni medij R32 koji ne samo da pomaže pri očuvanju okoliša, već i pridonosi energetskoj učinkovitosti uređaja.',
    brand: 'Hyundai',
    category: 'Mono klima uređaj',
    price: 7612.50,
    onSale: false,
    sale: 0,
<<<<<<< HEAD
    warmEff: 7.3,
    coldEff: 7.0,
=======
    coldEff: 5.3,
    warmEff: 5.6,
>>>>>>> 44ecad877c772122b7034a335ed7df66c9e40c0f
    energyClass: 'A++',
    sizeOfRoom: '46-55',
    countInStock: 2,
    rating: 0,
    numReviews: 0,
    najtrazeni: false,
  },
  {
    name: 'Hyundai Performance Inverter Plus 7.0 kW',
    sifraProizvoda: 'HRH-24BMVHRO-24BMV',
    image: '/images/3-600ecc85d15b4_600ed64e094ed_640.png',
    description:
      'Osnovni model Hyundai klima uređaja hladi vrući zrak u prostoriji na željenu temperaturu i pritom odlično izgleda. Klima uređaj Hyundai Performance Inverter Plus HRH-24BMV/HRO-24BMV u prostorijama do 75 m² osigurava ugodnu klimu. Istovremeno filtrira zrak u prostoriji pomoću filtarskog sustava koji se sastoji od filtera visoke gustoće, aromatizirajućeg filtera i filtera s aktivnim ugljenom. Dodatnu kvalitetu zraka ovom modelu Hyundai klima uređaja osigurava i ionizator zraka. Također, ova serija koristi ekološki prihvatljiv rashladni medij R32 koji ne samo da pomaže pri očuvanju okoliša, već i pridonosi energetskoj učinkovitosti uređaja.',
    brand: 'Hyundai',
    category: 'Mono klima uređaj',
    price: 9812.5,
    onSale: false,
    sale: 0,
    coldEff: 7.0,
    warmEff: 7.3,
    energyClass: 'A++',
    sizeOfRoom: '66-75',
    countInStock: 2,
    rating: 0,
    numReviews: 0,
    najtrazeni: false,
  },
  {
    name: 'Qzen Start Inverter Plus 2.6 kW',
    sifraProizvoda: 'ZE-09WSE/ZE-09OSE',
    image: '/images/3-600ecc85d15b4_600ed64e094ed_640.png',
    description:
      'Klima uređaj Qzen Start Inverter Plus 2.6 kW predstavlja idealno rješenje ako želite štedljiv uređaj s modernim tehnologijama i dodatnim funkcijama, ali po prihvatljivoj cijeni. Ovi odlični uređaji nalaze se u energetskom razredu A++ i zahvaljujući ekološki prihvatljivijem rashladnom mediju R32 osiguravaju još veću uštedu, efikasnost i naravno manje štetan utjecaj na okolinu. Dodatno, potrošnja za vrijeme mirovanja je smanjena na samo 1W.',
    brand: 'QZEN',
    category: 'Mono klima uređaj',
    price: 3433.75,
    onSale: false,
    sale: 0,
    coldEff: 2.6,
    warmEff: 2.9,
    energyClass: 'A++',
    sizeOfRoom: '16-25',
    countInStock: 2,
    rating: 0,
    numReviews: 0,
    najtrazeni: false,
  },
  {
    name: 'Qzen Start Inverter Plus 3.5 kW',
    sifraProizvoda: 'ZE-12WSE/ZE-12OSE',
    image: '/images/3-600ecc85d15b4_600ed64e094ed_640.png',
    description:
      'Klima uređaj Qzen Start Inverter Plus 3.5 kW predstavlja idealno rješenje ako želite štedljiv uređaj s modernim tehnologijama i dodatnim funkcijama, ali po prihvatljivoj cijeni. Ovi odlični uređaji nalaze se u energetskom razredu A++ i zahvaljujući ekološki prihvatljivijem rashladnom mediju R32 osiguravaju još veću uštedu, efikasnost i naravno manje štetan utjecaj na okolinu. Dodatno, potrošnja za vrijeme mirovanja je smanjena na samo 1W.',
    brand: 'QZEN',
    category: 'Mono klima uređaj',
    price: 3633.75,
    onSale: false,
    sale: 0,
    coldEff: 3.5,
    warmEff: 3.8,
    energyClass: 'A++',
    sizeOfRoom: '26-35',
    countInStock: 2,
    rating: 0,
    numReviews: 0,
    najtrazeni: false,
  },
  {
    name: 'Qzen Start Inverter Plus 5.3 kW',
    sifraProizvoda: 'ZE-18WSE/ZE-18OSE',
    image: '/images/3-600ecc85d15b4_600ed64e094ed_640.png',
    description:
      'Klima uređaj Qzen Start Inverter Plus 5.3 kW predstavlja idealno rješenje ako želite štedljiv uređaj s modernim tehnologijama i dodatnim funkcijama, ali po prihvatljivoj cijeni. Ovi odlični uređaji nalaze se u energetskom razredu A++ i zahvaljujući ekološki prihvatljivijem rashladnom mediju R32 osiguravaju još veću uštedu, efikasnost i naravno manje štetan utjecaj na okolinu. Dodatno, potrošnja za vrijeme mirovanja je smanjena na samo 1W.',
    brand: 'QZEN',
    category: 'Mono klima uređaj',
    price: 6402.50,
    onSale: false,
    sale: 0,
    coldEff: 5.3,
    warmEff: 5.5,
    energyClass: 'A++',
    sizeOfRoom: '46-55',
    countInStock: 2,
    rating: 0,
    numReviews: 0,
    najtrazeni: false,
  },
]

export default products
