import { useState, useEffect} from "react"
import Cabeçalho from "../../components/cabeçalho"
import "./index.scss"

export default function Efeitos(){

    const[mençao,setMençao]=useState("")
    const[situaçao,setSituaçao]=useState("-")

    useEffect(()=>{
        avaliarMençao()

    },[mençao])

    function avaliarMençao(){
        if(mençao === "P"){
            setSituaçao("Planejamento Satisfatório")
        }
       else if(mençao === "S"){
            setSituaçao("Satisfatório")
        }
       else if(mençao === "NS"){
            setSituaçao("Não Satisfatório")
        }
        else{
            setSituaçao("Invalido")
        }
    }

    return(
        <div className="page-efeito pagina">
            <Cabeçalho
            titulo = "Efeitos"
            />

            <div className="seçao">
                <h1>Situação Aluno</h1>

                <div className="sit-aluno">
                    <div>{situaçao}</div>
                    <div>
                    <label htmlFor="">Menção = </label>
                    <input type="text" value={mençao}  onChange={e=>setMençao(e.target.value)}/>
                    </div>
                   
                </div>


            </div>

        </div>
    )
}