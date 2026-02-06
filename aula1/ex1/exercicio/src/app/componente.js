export function Texto ({nome, data, cep}){
    return (
        <>
            <p className="text-white font-bold">Nome: {nome}</p>
            <p className="text-white font-bold">Data de Nascimento: {data}</p>
            <p className="text-white font-bold">CEP: {cep}</p>
        </>
    )
}