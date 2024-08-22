import Button from "./evento/Button"

function Evento(){

    function meuEvento(){
        console.log(`Ativando meu primeiro evento`)
    }

    function segundoEvento(){
        console.log(`Ativando meu segundo evento`)
    }
    return (
        <>
        <p>Clique para disparar um evento:</p>
        <Button event={meuEvento} text="Primeiro evento" />
        <Button event={segundoEvento} text="Segundo evento" />
        </>
    )
}

export default Evento