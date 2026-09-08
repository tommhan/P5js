import { useState } from 'react'

 const teksti = `Käsi on paketissa, kirjoitan tekstiä yhdellä kädellä. tarkoitus on opetella funktiollista ohjelmointia
ja sen käyttöä. Tässä on esimerkki funktiollisesta ohjelmoinnista JavaScriptissä. Funktioiden avulla voimme käsitellä tietoa ja suorittaa operaatioita ilman sivuvaikutuksia.`;
 
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
const Tervedys = () => <h1>Hei, tervetuloa!</h1>;
const FunkSearch = () => {
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
      
          <Tervedys/>
      <button onClick={() => setCount(count + 1)}>
        Count is {count}
      </button>
    </section>
  )
}

export default FunkSearch