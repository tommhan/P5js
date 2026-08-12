import { useState } from 'react'

import './App.css'

const Button = (props) => (
  < button onClick={props.onClick}>{props.text}</button>)


const App = () => {
  const [value, setValue] = useState(0)
  const [merkki]

  return (
    <div>
      <div className="counter">{value}</div>
      <div className="buttons">
        <Button onClick={() => setValue(value + 1)} text='plus'/>
        <Button onClick={() => setValue(value - 1)} text='minus'/>
        <Button onClick={() => setValue(0)} text='reset'/>

        
      </div>
    </div>
  )
}

export default App
