const Note = ({ note }) => {
  return (
    <li>
     {note.id}. {note.name} sanoi, että "{note.content}". 
    </li>
  )
}

export default Note