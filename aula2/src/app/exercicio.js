'use client'

import { useState } from "react"

export default function Volume ({numero}) {
    
    const[volume, setVolume] = useState(0);


    const handleSomar = () => {
        if(volume<10)
            setVolume(atual => atual + 1);
    }
    const handleSubtrair = () => {
        if(volume>0)
            setVolume(atual => atual - 1);
    }
    

    return (
        <>
        <div className="bg-gray-200 border w-30 text-center m-3">
            <h1>{numero}</h1>
            <p>Volume = {volume}</p>
            <button onClick={handleSomar} className="m-3 p-1 bg-green-500 text-black">
                +
            </button>
            <button onClick={handleSubtrair} className="p-1 w-5 bg-red-500 text-black">
                -
            </button>
        </div>
        </>
    )
}