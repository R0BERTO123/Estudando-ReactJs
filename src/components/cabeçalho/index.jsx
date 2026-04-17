import './index.scss'

export default function Cabeçalho(p){

    return(
        <div>
             <div className='comp-cabeçalho'>
                <h1 className='titulo'>{p.titulo ??"nada"}</h1>

            </div>
        </div>

    )
}