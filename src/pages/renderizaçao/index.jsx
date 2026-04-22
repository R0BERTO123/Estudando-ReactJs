import "./index.scss"
import Cabeçalho from "../../components/cabeçalho"
import { useState } from "react"

export default function Renderizaçao() {

    const[exibirBiscoito,setExibirBiscoito]=useState(false)

    function abrirBiscoito(){
        setExibirBiscoito(!exibirBiscoito)
    }

    return (
        <div className="page-renderizaçao pagina">
            <Cabeçalho
                titulo="Renderização"
            />
            <div className="biscoito seçao">
                <h1>Biscoito da sorte</h1>
                <button onClick={abrirBiscoito}>{exibirBiscoito === true ? "Fechar" :"Abrir"}</button>

                {exibirBiscoito===true &&
                <div className="biscoito-msg">
                <p>
                    vai corintias
                </p>

                </div>
}
            </div>


        </div>
    )
}