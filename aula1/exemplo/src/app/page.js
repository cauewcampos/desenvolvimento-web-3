import { Nome, Texto } from "./componentes";

export default function Pagina () {
  return (
    <>
      <p>Essa é minha página</p>
      <Texto/>
      <Nome nome="Cauê" idade={19}/>
      <Nome nome="Breno" idade={21}/>

      <p className="text-white font-bold bg-pink-600">Texto formatado</p>
      <p className="text-blue-400 font-bold">Texto formatado</p>
      <p className="bg-green-600 py-3 px-3 font-bold text-white rounded-md hover:bg-green-800 cursor-pointer w-25 text-center">Enviar</p>
    </>
  );
}
