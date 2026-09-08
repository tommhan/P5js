const [searchTerm, setSearchTerm] = useState('');
 const notesToShow = showAll
  ? notes.filter(note =>
      note.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase())
    )
  : notes.filter(note =>
      note.important === true &&
      (note.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
       note.content.toLowerCase().includes(searchTerm.toLowerCase()))
    );
 const notesToShow = showAll
  ? notes.filter(note =>
      note.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase())
    )
  : notes.filter(note =>
      note.important === true &&
      (note.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
       note.content.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    import { useState } from 'react';
import Note from './components/Note';

const inNotes = (notes, newNote) => {
  return notes.some((note) => note.content === newNote);
};

const Search = () => {
  const [notes, setNotes] = useState([
    { id: 1, content: 'HTML is easy', important: true, name: 'Alice' },
    { id: 2, content: 'Browser can execute only JavaScript', important: false, name: 'Bob' },
    { id: 3, content: 'Most important methods of HTTP-protocol are GET and POST', important: true, name: 'Charlie' }
  ]);

  const [newNote, setNewNote] = useState('');
  const [newName, setNewName] = useState('');
  const [showAll, setShowAll] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const addNote = (event) => {
    event.preventDefault();
    if (newNote.trim() === '') {
      alert('Note cannot be empty');
      return;
    }
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
      id: Date.now(),
      name: newName
    };

    setNotes(notes.concat(noteObject));
    setNewNote('');
    setNewName('');
  };

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  const notesToShow = showAll
    ? notes.filter(note =>
        note.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.content.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : notes.filter(note =>
        note.important === true &&
        (note.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
         note.content.toLowerCase().includes(searchTerm.toLowerCase()))
      );

  return (
    <div>
      <h1>Notes</h1>

      {/* Hakulomake */}
      <div>
        <input
          type="text"
          placeholder="Search by name or content..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
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

export default Search;