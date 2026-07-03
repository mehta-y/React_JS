import { useState } from "react"

function App() {
  const [color , setColor] = useState("blue")
  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flexwrap bottom-12 justify-center inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-1.5 py-1 rounded-full">
          <button
          onClick={()=>{setColor("red")}}
          className="outline-none px-4 py-1 rounded-full shadow-lg cursor-pointer"
          style={{backgroundColor: "red",color:"white"}}
          >Red</button>
          <button
          onClick={()=>{setColor("olive")}}
          className="outline-none px-4 py-1 rounded-full shadow-lg cursor-pointer"
          style={{backgroundColor: "olive",color:"white"}}
          >olive</button>
          <button
          onClick={()=>{setColor("blue")}}
          className="outline-none px-4 py-1 rounded-full shadow-lg cursor-pointer"
          style={{backgroundColor: "blue",color:"white"}}
          >blue</button>
          <button
          onClick={()=>{setColor("black")}}
          className="outline-none px-4 py-1 rounded-full shadow-lg cursor-pointer"
          style={{backgroundColor: "black",color:"white"}}
          >black</button>
          <button
          onClick={()=>{setColor("yellow")}}
          className="outline-none px-4 py-1 rounded-full shadow-lg cursor-pointer"
          style={{backgroundColor: "yellow",color:"white"}}
          >yellow</button>
          <button
          onClick={()=>{setColor("violet")}}
          className="outline-none px-4 py-1 rounded-full shadow-lg cursor-pointer"
          style={{backgroundColor: "violet",color:"white"}}
          >violet</button>
          <button
          onClick={()=>{setColor("darkgreen")}}
          className="outline-none px-4 py-1 rounded-full shadow-lg cursor-pointer"
          style={{backgroundColor: "darkgreen",color:"white"}}
          >darkgreen</button>
        </div>
      </div>
    </div>
  )
}

export default App
