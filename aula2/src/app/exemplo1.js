'use client'
import { useState } from "react";
export default function Botao(){

  const [cliques, setCliques] = useState(0);

  const handleClicar = () => {
    setCliques (atual => atual + 1);
  }

  return (
    <>
      <button onClick={handleClicar}
      className="text-white text-center p-3 m-3 cursor-pointer rounded-2xl bg-blue-600 hover:bg-blue-800 font-bold">
        Clique aqui
      </button>
      <button 
      className="text-white text-center p-3 m-3 cursor-pointer rounded-2xl bg-red-600 hover:bg-red-800 font-bold">
        Zerar
      </button>
      <p className="p-3">
        O botão foi clicado {cliques} vez(es)
      </p>   
    </>
  )

}