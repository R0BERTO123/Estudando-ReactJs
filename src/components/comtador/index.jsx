import "./index.scss"
import { useState } from "react"

export default function Contador(p){

    const[numero,setNumero]=useState(0)

    function mais(){
        if(numero <(p.fim ?? 10)){   
        setNumero( numero +1)
        }
    }
    function menos(){
        if(numero>(p.inicio ?? 0)){
        setNumero( numero -1)
        }
    }

    return(
        <div className="comp-contador">

           
            <div className="cont seçao">
            <h1>{p.titulo??"contador"}</h1>
                <button onClick={mais}>+</button>
                {numero}
                <button onClick={menos}>-</button>
            </div>

        </div>
    )
}