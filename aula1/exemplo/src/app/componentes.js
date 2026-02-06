export function Texto() {
    return (
        <p>Olá mundo!!</p>
    )
}

export function Nome({nome, idade}) {
    return (
        <>
            <p>Olá, eu sou o {nome}</p>
            <p>Eu tenho {idade + 1} anos</p>
        </>
    )
}



