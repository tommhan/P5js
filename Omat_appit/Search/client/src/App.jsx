import { useState } from 'react';
import Note from './components/Note';

const inNotes = (notes, newNote) => {
  return notes.some((note) => note.content === newNote);
};

const App = () => {
  const [notes, setNotes] = useState([
    { id: 1, content: 'HTML is easy', important: true, name: 'Alice' },
    { id: 2, content: 'Browser can execute only JavaScript', important: false, name: 'Bob' },
    { id: 3, content: 'Most important methods of HTTP-protocol are GET and POST', important: true, name: 'Charlie' }
  ]);

  const [newNote, setNewNote] = useState('');
  const [newName, setNewName] = useState('');
  const [showAll, setShowAll] = useState(true);
  const [haku, setHaku] = useState('');   // State hakua varten

  const addNote = (event) => {
    event.preventDefault();
    
    if (newName.trim() === '') {
      alert('Name cannot be empty');
      return;
    }
    if (inNotes(notes, newNote)) {
      alert(`${newNote} is already added to notes`);
      return;
    }

    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
      id: notes.length + 1,
      name: newName
    };
    console.log('Adding note:', noteObject);

    setNotes(notes.concat(noteObject));
    setNewNote('');
    setNewName('');
  };

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  const notesToShow = showAll
    ? notes.filter(note =>
        note.name.toLowerCase().includes(haku.toLowerCase()) ||
        note.content.toLowerCase().includes(haku.toLowerCase())
      )
    : notes.filter(note =>
        note.important === true &&
        (note.name.toLowerCase().includes(haku.toLowerCase()) ||
         note.content.toLowerCase().includes(haku.toLowerCase()))
      );
 console.log('Notes to show:', notesToShow);
  console.log('Search input value:', haku);
  return (
    
    <div>
      <h1>Notes</h1>

      {/* Hakulomake */}
      <div>
        <input
          type="text"
          placeholder="Search by name or content..."
          value={haku}
          onChange={(e) => setHaku(e.target.value)}
         
        />
      </div>

      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>

      <ul>
        {notesToShow.map(note => (
          <Note key={note.id} note={note} name={note.name} />
        ))}
      </ul>

      <h3>Add a new name and a new note</h3>
      <form onSubmit={addNote}>
        <div>
          name: <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          note: <input value={newNote} onChange={handleNoteChange} />
        </div>
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default App;