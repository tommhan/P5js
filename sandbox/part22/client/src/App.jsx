import { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: 'Arto Hellas', phone: 1234567},
    { id: 2, name: 'Jaques Tati', phone: 3456725 },
    { id: 3, name: 'Akira Kurosawa', phone: 9876543}
  ])

  // Tila uuden henkilön nimelle ja puhelinnumerolle
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');

  // Päivitetään nimikenttä
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  // Päivitetään puhelinnumerokenttä
  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value);
  };

   // Lisätään uusi henkilö
  const addPerson = (event) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const phone = event.target.elements.phone.value;
 console.log(`Lisätään henkilö: ${name} numero: ${phone}`);
    // Luodaan uusi henkilö
    const newPerson = {
      id: persons.length + 1, // Yksinkertainen ID-generointi
      name: name,
      phone: phone,
    };
    // Päivitetään persons-taulukko
    setPersons(persons.concat(newPerson));/* sama kuin setPersons([...persons, newPerson]);/  Spread-operaattorin (...) rooli
...persons kopioi kaikki alkiot persons-taulukosta uuteen taulukkoon.*/
   console.log('Henkilö lisätty (concat):', newPerson);                            

    // Tyhjennetään lomake
    event.target.reset();
  };
  
  return (
     <div>
      <h2>Phonebook</h2>

      <form onSubmit={addPerson}>
        <div>
          <input
            name="name"
            value={newName}
            onChange={handleNameChange}
            placeholder="Nimi"
          />
        </div>
        <div>
          <input
            name="phone"
            value={newPhone}
            onChange={handlePhoneChange}
            placeholder="Puhelinnumero"
          />
        </div>
        <button type="submit">Tallenna</button>
      </form>
       <div>
        {persons.map((person) => (
          <Person key={person.id} name={person.name} phone={person.phone} />
        ))}
      </div>
    </div>
  );
};

export default App