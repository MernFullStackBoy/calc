import { useState } from "react"

function App() {

  const [res, setRes] = useState("")

  function handleClick(e) {
    setRes(res.concat(e.target.name))
  }

  function handleClear() {
    setRes("")
  }

  function handleDelete() {
    setRes(res.slice(0, -1))
  }

  function handleResult() {
    setRes(eval(res).toString())
  }

  return (
    <div className=" max-w-[400px] h-[600px] bg-black mx-auto mt-5 rounded-[20px] ">
      <input className=" w-[100%] h-[180px] text-end text-[70px] bg-transparent font-semibold pr-5 " value={res} type="text" disabled />
      <div className=" flex flex-wrap justify-center gap-[15px] ">
        <button onClick={handleClear} className=" font-bold text-[25px] w-[70px] h-[70px] bg-blue-700 rounded-[20px]">C</button>
        <button onClick={handleDelete} className=" w-[70px] h-[70px] bg-blue-700 rounded-[20px] fa-solid fa-delete-left"></button>
        <button onClick={handleClick} name="*" className="fa-solid fa-xmark w-[70px] h-[70px] bg-blue-700 rounded-[20px]"></button>
        <button onClick={handleClick} name="/" className="fa-solid fa-divide w-[70px] h-[70px] bg-blue-700 rounded-[20px]"></button>
        <button className="w-[70px] h-[70px] bg-red-700 rounded-[20px] font-bold text-[25px]" onClick={handleClick} name="1">1</button>
        <button className=" w-[70px] h-[70px] bg-red-700 rounded-[20px]  font-bold text-[25px] " onClick={handleClick} name="2">2</button>
        <button className=" w-[70px] h-[70px] bg-red-700 rounded-[20px] font-bold text-[25px] " onClick={handleClick} name="3">3</button>
        <button onClick={handleClick} name="+" className="fa-solid fa-plus w-[70px] h-[70px] bg-blue-700 rounded-[20px]"></button>
        <button className=" w-[70px] h-[70px] bg-red-700 rounded-[20px] font-bold text-[25px] " onClick={handleClick} name="4">4</button>
        <button className=" w-[70px] h-[70px] bg-red-700 rounded-[20px] font-bold text-[25px] " onClick={handleClick} name="5">5</button>
        <button className=" w-[70px] h-[70px] bg-red-700 rounded-[20px] font-bold text-[25px] " onClick={handleClick} name="6">6</button>
        <button onClick={handleClick} name="-" className="fa-solid fa-minus w-[70px] h-[70px] bg-blue-700 rounded-[20px]"></button>
        <button className=" w-[70px] h-[70px] bg-red-700 rounded-[20px] font-bold text-[25px] " onClick={handleClick} name="7">7</button>
        <button className=" w-[70px] h-[70px] bg-red-700 rounded-[20px] font-bold text-[25px] " onClick={handleClick} name="8">8</button>
        <button className=" w-[70px] h-[70px] bg-red-700 rounded-[20px] font-bold text-[25px] " onClick={handleClick} name="9">9</button>
        <button className=" w-[70px] h-[70px] bg-blue-700 rounded-[20px] font-bold text-[25px] " onClick={handleClick} name=".">.</button>
        <button className=" w-[70px] h-[70px] bg-red-700 rounded-[20px] font-bold text-[25px] " onClick={handleClick} name="0">0</button>
        <button onClick={handleResult} className=" w-[240px] h-[70px] bg-blue-700 rounded-[20px] fa-solid fa-equals"></button>
      </div>
    </div>
  )
}

export default App