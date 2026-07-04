import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(6)
  const [numberAllowance, setnumberAllowance] = useState(false)
  const [characterAllowance, setcharacterAllowance] = useState(false)
  const [password , setpassword] = useState("")
  const [copied, setCopied] = useState(false)
  const passwordRef = useRef(null)

  // usecallback(fn,dependency array)
  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = `QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm`
    if(numberAllowance) str += `1234567890`
    if(characterAllowance) str += "`~!@#$%^&*(){}[]"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)
    }
    setpassword(pass)
  },[length,numberAllowance,characterAllowance,setpassword])


const copyPassword = useCallback(()=>{
  passwordRef.current?.select()
  window.navigator.clipboard.writeText(password)
  setCopied(true)
  setTimeout(() => {
    setCopied(false)
  }, 2000);
},[password])


  useEffect(()=>{
    passwordGenerator()
  }, [length,numberAllowance,characterAllowance,passwordGenerator]
  )
  return (
    <>
      
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-yellow-500 bg-gray-700'>
        <div className='my-8 inset-x-0'>
        <h1 className='text-4xl text-center text-white  '>Password GENERATOR</h1>
        </div>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text" 
          value={password}
          className='outline-none w-full py-1 px-3 bg-amber-50 text-orange-500'
          placeholder='password'
          readOnly
          ref={passwordRef}
          />
          <button className={`px-2 text-amber-50 shrink-0 cursor-pointer ${copied? "bg-orange-500" : "bg-blue-700"}`}
          onClick={copyPassword}
            >
            {copied? "Copied!" : "Copy"}
          </button>
        </div>
        <div className='flex w-full text-sm gap-x-2'>
          <input type="range"
          min={6}
          max={25}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setlength(e.target.value)}}
          />
          <label>Length : {length}</label>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            className='cursor-pointer'
            defaultChecked={numberAllowance}
            onChange={()=>{
              setnumberAllowance((prev)=>!prev)
              // if used true , the value will be set true for eternity
            }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            className='cursor-pointer'
            defaultChecked={characterAllowance}
            onChange={()=>{
              setcharacterAllowance((prev)=>!prev)
            }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
