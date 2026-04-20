import "./index.scss"

export default function PlanosAtuais(p){

    return(
        <div className='planta' key={p.pos}>

        <div className='cor' style={{ backgroundColor: p.item.cor }}>&nbsp;</div>
        <h1>{p.item.plano} </h1>
        <h2>{p.item.situaçao}</h2>

        <div className='editarExcluir'>
            <div onClick={() => p.exluirPlano(p.pos)}>❌</div>
            <div onClick={() => p.editarPlano(p.pos)}>✍</div>

        </div>
    </div>

    )

}