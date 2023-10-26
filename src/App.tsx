// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import Inputbox from './components/Inputbox'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full h-screen flex justify-center">
        <div className="flex-col h-96 w-2/6 rounded-xl hover:shadow-2xl mt-40 bg-black/30 backdrop-blur-sm border" >
          <Inputbox />
          <Inputbox />
          <div className="flex justify-center">
            <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 h-14 w-11/12 rounded-xl mt-4 flex items-center justify-center text-2xl text-white">Convert</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
