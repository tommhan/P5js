 // concat ketjuttaa listat uudeksi listaksi. Se ei muuta alkuperäistä listaa, vaan palauttaa uuden listan.
 // Esimerkki:setPerson(persons.concat(newPersons)); liittää uuden henkilön vanhaan listaan ja palauttaa uuden listan, jossa on molemmat henkilöt.
 //concat toimiin samoin kuin spread operaattori, mutta se on hieman hitaampi. Siksi kannattaa käyttää spread operaattoria, jos halutaan liittää listoja yhteen.
 // setPerson([...persons, ...newPersons]); liittää uuden henkilön vanhaan listaan ja palauttaa uuden listan, jossa on molemmat henkilöt.
 const lista = ['a', 'b', 'c', 'd'];
const newList = lista.concat(['e', 'f', 'g']);