import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0) // count is the state variable, setCount is the function to update the state variable

  return (
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
  )
}

export default App
