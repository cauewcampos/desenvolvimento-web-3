import { Texto } from "./componente";

export default function Pagina() {
  return (
    <div className="flex items-center flex-col">
      <div className="my-3 bg-black rounded-md text-center w-50">
        <Texto nome="Cauê" data="06/05/2005" cep="14745-019"/>
      </div>
      <div className="my-3 bg-black rounded-md text-center w-50">
        <Texto nome="Breno" data="18/09/2005" cep="14702-127"/>
      </div>
      <div className="my-3 bg-black rounded-md text-center w-50">
        <Texto nome="Ana" data="23/11/2006" cep="14722-018"/>
      </div>
    </div>
  );
}