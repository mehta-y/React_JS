import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [count, setCount] = useState(7)
  // usestate is a hook provided to alter vlues, count is like a variable and setCount is ttha name of function which we want it to do. usestate(7) means the initial vaue is 7. it is basically an array whose first value is count that is 7
  const addvalue = ()=>{
    count = count+1
    setCount(count)
  }
  const removevalue = ()=>{
    setCount(count--)
  }

  return (
    <>
      <h1>counter value:{count}</h1>
      <button
      onClick={addvalue}
      >add value</button>
      <button 
      onClick={removevalue}
      >remove value</button>
    </>
  )
}

export default App
