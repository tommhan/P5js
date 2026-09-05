import { useState } from 'react'

import './App.css'
const Remont  = () => {
  return (<div>Tämä sivu on remontissa</div>)
}
const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Remont />
    </div>
  )
}
    
      
export default App
