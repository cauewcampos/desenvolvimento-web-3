'use client'

import { useState } from "react"

export default function Volume ({numero, powerAll}) {
    
    const[volume, setVolume] = useState(0);

    const handleSomar = () => {
        if(volume<10)
            setVolume(atual => atual + 1);
    }
    const handleSubtrair = () => {
        if(volume>0)
            setVolume(atual => atual - 1);
    }

    const[interruptor, setEstado] = useState(false);

    const handleLuz = () => {
        if (interruptor) 
            setEstado(false);
        else
            setEstado(true);
    }


    return (
        <>
        <div className="bg-gray-200 border w-35 text-center m-3">
            <button onClick={handleLuz} type="button" className="btn cursor-pointer bg-gray-600 p-1 rounded-md mb-5">
                {
                    interruptor || powerAll ? <p className="text-green-400">LIGAR</p> : <p className="text-red-400">DESLIGAR</p>
                }
            </button>
            <h1 className="text-black">{numero}</h1>
            <p className="text-black">Volume = {volume}</p>
            <button disabled={interruptor || powerAll} onClick={handleSomar} className="m-3 px-2 bg-green-500 text-black disabled:cursor-not-allowed disabled:bg-green-300 cursor-pointer">
                +
            </button>
            <button disabled={interruptor || powerAll} onClick={handleSubtrair} className="px-2 m-3 bg-red-500 text-black disabled:cursor-not-allowed disabled:bg-red-300 cursor-pointer">
                -
            </button>
            {
                volume === 0 ? <p className="text-red-400">Volume mínimo</p> : null
            }
            {
                volume === 10 ? <p className="text-blue-600">Volume máximo</p> : null
            }
        </div>
        </>
    )
}