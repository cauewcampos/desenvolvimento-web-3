"use client"

import { useState } from "react";
import Volume from "./entrada";

export default function Page(){

  const[botao, setEstado] = useState(true);

  const handleLuz = () => {
      if (botao) {
              setEstado(false);
      }
      else if(!botao) {
              setEstado(true);
      }
          
  }

  return (
    <div className="flex">
      <Volume numero="Entrada 1" powerAll={botao}/>
      <Volume numero="Entrada 2" powerAll={botao}/>
      <Volume numero="Entrada 3" powerAll={botao}/>
      <button onClick={handleLuz} className="cursor-pointer">
        {
          botao === false ? <p className="text-black bg-green-400 rounded-xl px-2">LIGAR TODAS</p> : <p className="text-black bg-red-400 rounded-xl px-2">DESLIGAR TODAS</p>
        }
      </button>
    </div>
  )

}