import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)

  }, [])

  return (
    <>
    { loading ? <div className="h-screen fixed w-full bg-[rgba(0,0,0,0.9)] flex items-center justify-center">
    <div className="absolute z-10 size-40 rounded-full bg-red-40 flex items-center justify-center">
        <p className="font-mono text-white">LIVE DEMOS</p>

        </div>
      <div className="relative size-40 rounded-full bg-black border-2 border-dashed flex items-center justify-center animate-spin">
        
      </div>
    </div> : 
    <div className="h-screen fixed w-full bg-[rgba(0,0,0,0)] flex items-center justify-center">
       <div className="relative w-60 mx-auto bg-black ">
        <div className="w-[30%] left-[35%] absolute bg-red-40 h-full flex justify-between">
          <div className="relative w-[1px] h-full bg-gray-800">
            <div className="absolute -left-[1px] trail h-[10%] bg-white w-[3px] bg-gradient-to-b from-gray-500 to-white rounded-b-full"></div>
          </div>
          <div className="relative w-[1px] h-full bg-gray-800">
            <div className="absolute blink bottom-5 h-5 bg-white w-[1px]"></div>
          </div>
          <div className="relative w-[1px] h-full bg-gray-800">
            <div className="absolute -left-[1px] rev-trail h-[10%] bg-white w-[3px] bg-gradient-to-b from-gray-500 to-white rounded-t-full"></div>
          </div>
        </div>
        <div className="space-y-10 p-5">
          <div className="relative w-40 mx-auto bg-red-40">
            <p className="text-4xl font-mono text-white text-center">Bravex</p>
          </div>
          <div className="relative w-full mx-auto bg-black my-10 flex items-center justify-center p-5">
            <p className="text-3xl font-mono text-white">Bravex</p>
          </div>
          <div className="relative w-40 mx-auto">
          <p className="text-4xl font-mono text-white text-center">Bravex</p>
          </div>
          <div className="relative w-40 mx-auto bg-black my-10 flex items-center justify-center border p-5">
            <p className="text-3xl font-mono text-white">Bravex</p>
          </div>
          <div className="relative w-40 mx-auto">
          <p className="text-4xl font-mono text-white text-center">Bravex</p>
          </div>
          <div className="relative w-full mx-auto bg-black my-10 flex items-center justify-center p-5">
            <p className="text-3xl font-mono text-white">Bravex</p>
          </div>
          <div className="relative w-40 mx-auto">
          <p className="text-4xl font-mono text-white text-center">Bravex</p>
          </div>
        </div>
      </div> 
    </div>
     }
    </>
  );
}

export default App;
