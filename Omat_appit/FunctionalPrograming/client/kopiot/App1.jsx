import { useState } from 'react'

 const teksti = `Käsi on paketissa, kirjoitan tekstiä yhdellä kädellä. tarkoitus on opetella funktiollista ohjelmointia
ja sen käyttöä. Tässä on esimerkki funktiollisesta ohjelmoinnista JavaScriptissä. Funktioiden avulla voimme käsitellä tietoa ja suorittaa operaatioita ilman sivuvaikutuksia.`;
 const viikonTapahtumat = [
  
  {id: 1,paiva: 'ma',tapahtumat:[{id: 1, nimi: 'Kokous', aika: '10:00'},
  {id: 2, nimi: 'Lounas', aika: '12:00'}]},
  {id: 2,paiva: 'ti',tapahtumat:[{id: 1, nimi: 'Seminaari', aika: '09:00'},
  {id: 2, nimi: 'Kahvitauko', aika: '11:00'}]},
  {id: 1,paiva: 'ke',tapahtumat:[{id: 1, nimi: 'Kokous', aika: '10:00'},
  {id: 2, nimi: 'Lounas', aika: '12:00'}]},
  {id: 2,paiva: 'to',tapahtumat:[{id: 1, nimi: 'Seminaari', aika: '09:00'},
  {id: 4, nimi: 'Kahvitauko', aika: '11:00'}]},
  {id: 1,paiva: 'pe',tapahtumat:[{id: 1, nimi: 'Kokous', aika: '10:00'},
  {id: 2, nimi: 'Lounas', aika: '12:00'}]},
  
  {id: 2,paiva: 'la',tapahtumat:[{id: 1, nimi: 'Taidenäyttely', aika: '13:00'},
  {id: 2, nimi: 'Kahvitauko', aika: '11:00'}]},
  {id: 2,paiva: 'su',tapahtumat:[{id: 1, nimi: 'Seminaari', aika: '09:00'},
  {id: 2, nimi: 'Kahvitauko', aika: '11:00'}]},
] 
const xtapahtuma = viikonTapahtumat.map((paiva) => paiva.paiva)
const taulukko = teksti.split(' ')
  
 const getSanaStyle = (sana) => {
    const alkukirjain = sana.toLowerCase()[0]
    return {
      color: alkukirjain === 'f' || alkukirjain === 'F' ? 'red' : 'inherit',
      cursor: 'pointer'
    }
  }
  function suodatafuncTaulukko(taulukko) {
    return taulukko.filter(sana => sana.length > 5)
  }
const App = () => {
  const [count, setCount] = useState(0)
  
 
  
  
  
  const suodatettuTaulukko = suodatafuncTaulukko(taulukko)
  
  // ✨ Funktio punaisen värin määritykseen
  
  
  return (
    <section id="center">
      <h1>Sanalistaa</h1>
      
      {/* Map-funktio ehtotarkistuksella */}
      <ul>
        {suodatettuTaulukko.slice(0, 10).map((sana, i) => (
          <li 
            key={i} 
            style={getSanaStyle(sana)}
          >
            {sana}
          </li>
        ))}
      </ul>
      < h1>Viikon tapahtumat</h1>
     <p>xTapahtumat: {xtapahtuma.join(', ')}</p>
      <ul>
        {viikonTapahtumat.map((paiva) => (
          <li key={paiva.id}>
            <strong>{paiva.paiva}</strong>
            <ul>
              {paiva.tapahtumat.map((tapahtuma) => (
                <li key={tapahtuma.id}>
                 Jos ehdit {tapahtuma.nimi} - {tapahtuma.aika}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul> 
      
     
      
      <button onClick={() => setCount(count + 1)}>
        Count is {count}
      </button>
    </section>
  )
}

export default App