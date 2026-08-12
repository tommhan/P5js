import React, { useState, useEffect } from 'react';

function NappainTaulukko() {
  // Alustetaan tila tyhjällä taulukolla []
  const [merkit, setMerkit] = useState([]);

  useEffect(() => {
    const kasitteleNappain = (event) => {
      // Otetaan vanhat merkit (...prev) ja lisätään uusi perään [ ...prev, uusi ]
      setMerkit(prev => [...prev, event.key]);
    };

    window.addEventListener('keydown', kasitteleNappain);
    return () => window.removeEventListener('keydown', kasitteleNappain);
  }, []);
  const tekstit = merkit.join('')
  const tallennustekstit =JSON.stringify(merkit)
  return (
    <div>
      <h3>Painetut merkit taulukossa:</h3>
      {/* Näytetään taulukko tekstinä pilkuilla eroteltuna */}
      <p>{tallennustekstit}</p>
      <h3>Painetut merkit tekstinä:</h3>
      <p>{tekstit}</p>
    </div>
  );
}
/*export default NappainTaulukko*/
const App = () => {
  return (
    <div>
      <h1>Nappain Taulukko</h1>
      <NappainTaulukko />
    </div>
  );
}
export default App;